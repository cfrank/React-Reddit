import AppDispatcher from '../Dispatchers/AppDispatcher';
import AuthConstants from '../Constants/AuthConstants';
import AuthActions from '../Actions/AuthActions';
import RedditAPI from '../Utils/RedditApi';
import Options from '../Utils/Options';

const BASE_URL = Options.auth_base_url;
const CLIENT_ID = Options.client_id;
const TAKE_A_FEW = Options.take_a_few;
const REDIRECT_URL = Options.redirect_url;
const DURATION = Options.duration;
const SCOPE = Options.scope;
const AUTH_STATE = returnState(TAKE_A_FEW, 15);

export default{
  startLoginSequence: () => {
    AuthActions.loginStart();
  },
  loginFire: () => {
    let url = `${BASE_URL}client_id=${CLIENT_ID}&response_type=code&state=${AUTH_STATE}&redirect_uri=${REDIRECT_URL}&duration=${DURATION}&scope=${SCOPE}`
    AuthActions.loginFire(AUTH_STATE, url);
  },
  retrieveCode: (params, state) => {
    let paramsObject = getUrlParams(params);
    let returnState = paramsObject.state;
    let code = paramsObject.code;
    let error = paramsObject.error;
    if(code !== undefined && error === undefined){
      if(state === returnState)
        RedditAPI.getAccessToken(code);
      else
        AuthActions.stateError(returnState, state);
    }else{
      AuthActions.codeError(error);
    }
  }
}

function returnState(TAKE_A_FEW, length){
  let state = '';
  for(let i = 0; i <= length; ++i){
    state += TAKE_A_FEW.charAt(Math.floor(Math.random() * TAKE_A_FEW.length));
  }
  return state;
}

function getUrlParams(params){
  var result = {};
  params.replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    ($0, $1, $2, $3) => {
      result[$1] = $3;
    }
  );
  return result;
}
