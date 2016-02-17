import AppDispatcher from '../Dispatchers/AppDispatcher';
import AuthConstants from '../Constants/AuthConstants';

export default{
    loginStart: () => {
        AppDispatcher.dispatch({
            actionType: AuthConstants.LOGIN_START,
            loggingIn: true
        })
    },

    loginFire: (state, url) => {
        AppDispatcher.dispatch({
            actionType: AuthConstants.LOGIN_FIRE,
            state: state,
            url: url
        })
    },

    stateError: (serverState, userState) => {
        AppDispatcher.dispatch({
            actionType: AuthConstants.STATE_ERROR,
            serverState: serverState,
            userState: userState
        })
    },

    codeError: (serverError) => {
        AppDispatcher.dispatch({
            actionType: AuthConstants.CODE_ERROR,
            serverError: serverError
        })
    },

    receivedAuthToken: (data) => {
        AppDispatcher.dispatch({
            actionType: AuthConstants.RECEIVED_AUTH_TOKEN,
            tokenData: data
        })
    },

    authTokenError: (error) => {
        AppDispatcher.dispatch({
            actionType: AuthConstants.AUTH_TOKEN_ERROR,
            error: error
        })
    },

    isLoggedIn: () => {
        AppDispatcher.dispatch({
            actionType: AuthConstants.IS_LOGGED_IN
        })
    },

    logout: () => {
        AppDispatcher.dispatch({
            actionType: AuthConstants.LOGOUT
        })
    }
}
