import BaseStore from './BaseStore';
import FrontActions from '../Actions/FrontActions';
import FrontConstants from '../Constants/FrontConstants';
import RedditApi from '../Utils/RedditApi';

class FrontStore extends BaseStore{
    constructor(){
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this.currentFrontListId = 1;
        this.currentFrontListType = 'Hot';
    }

    _registerToActions(action){
        switch(action.actionType){
            case FrontConstants.FRONT_LIST_CLICK:
                this.currentFrontListId = action.id;
                this.currentFrontListType = action.listType;
                this.emitChange();
                break;
            case FrontConstants.LOAD_FRONT_PAGE:
                // Load in front page data from the reddit api handler
                RedditApi.loadFrontPage(action.id, action.listType);
                break;
            default:
                break;
        }
    }
}

export default new FrontStore();
