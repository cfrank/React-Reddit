import BaseStore from './BaseStore';
import AuthActions from '../Actions/AuthActions';
import AuthConstants from '../Constants/AuthConstants';
import RedditAPI from '../Utils/RedditApi';
import Options from '../Utils/Options';
import { browserHistory } from 'react-router';

class AuthStore extends BaseStore {
    constructor(){
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this.loggedIn = this.isLoggedIn();
        this.loggingIn = false;
        this.areThereErrors = false;
        this.errors = {};
    }

    _registerToActions(action){
        switch(action.actionType){
            case AuthConstants.LOGIN_START:
                this.loggingIn = action.loggingIn;
                this.emitChange();
                break;
            case AuthConstants.LOGIN_FIRE:
                let state = {"LoginAuthState": action.state};
                this.addToLocalStorage(state);
                window.location = action.url;
                this.emitChange();
                break;
            case AuthConstants.GET_ACCESS_TOKEN:
                RedditAPI.getAccessToken(action.code);
                this.emitChange();
                break;
            case AuthConstants.STATE_ERROR:
                console.log('state error!!@!');
                this.areThereErrors = true;
                this.errors.error = {
                    title: Options.state_error_text,
                    subtext: `You sent ${action.userState} and the Reddit API responded with ${action.serverState}`
                }
                this.emitChange();
                break;
            case AuthConstants.CODE_ERROR:
                console.log('code error!!@!');
                this.areThereErrors = true;
                this.errors.error = {
                    title: Options.code_error_text,
                    subtext: action.serverError
                }
                this.emitChange();
                break;
            case AuthConstants.RECEIVED_AUTH_TOKEN:
                let accessToken = action.tokenData.access_token,
                    refreshToken = action.tokenData.refresh_token,
                    data = {
                        "AccessToken": accessToken,
                        "RefreshToken": refreshToken
                    };
                this.addToLocalStorage(data);
                this.loggedIn = true;
                break;
            case AuthConstants.AUTH_TOKEN_ERROR:
                this.areThereErrors = true;
                this.errors.error = {
                    title: `There has been an error!`,
                    subtext: `${action.error}`
                }
                this.emitChange();
                break;
            case AuthConstants.IS_LOGGED_IN:
                this.loggedIn = this.isLoggedIn();
                this.emitChange();
                break;
            case AuthConstants.LOGOUT:
                this.logout();
                this.loggedIn = false;
                this.emitChange();
                break;
            default:
            // No op
        };
    }
    // <VOID>
    addToLocalStorage(data){
        for(let key in data){
            if(data.hasOwnProperty(key)){
                localStorage.setItem(key, data[key]);
            }
        }
    }

    // <BOOL>
    isLoggedIn(){
        if(localStorage.getItem('AccessToken') !== null){
            return true;
        }else{
            return false;
        }
    }

    // <VOID>
    logout(){
        // Remove all Auth data from localStorage, thus 'logging out' the user
        localStorage.removeItem('AccessToken');
        localStorage.removeItem('RefreshToken');
        this.loggedIn = false;
        browserHistory.push('/');
    }
}

export default new AuthStore();
