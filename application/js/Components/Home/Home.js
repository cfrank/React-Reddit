import React from 'react';
import AuthStore from '../../Stores/AuthStore';
import AuthActions from '../../Actions/AuthActions';
import AuthActionController from '../../ActionControllers/AuthActionController';

import HomeIntroduction from './HomeIntroduction';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = this.getState();
    this._onStoreChange = this._onStoreChange.bind(this);
  }

  componentDidMount(){
    AuthStore.addChangeListener(this._onStoreChange);
  }

  componentWillUnmount(){
    AuthStore.removeChangeListener(this._onStoreChange);
  }

  _onStoreChange(){
    return this.setState(this.getState());
  }

  getState(){
    return{
      loggingIn: AuthStore.loggingIn,
      loggedIn: AuthStore.loggedIn
    }
  }

  render(){
      return(
        <div className="index">
          <div className="hero-container">
            <div className="home-index">
              <HomeIntroduction loggedIn={this.state.loggedIn} loggingIn={this.state.loggingIn} login={this._login}/>
            </div>
            <div className="show-more"></div>
          </div>

          <div className="info-splash">
            <h2>This is a fun programming and design experiment I created.</h2>
          </div>

          <div className="info-container">
            <div className="info-col">
              <div className="info-icon" id="eyes"></div>
              <p>I tried to make reddit easier on the eyes, while reddits design works well, and has a higher content density, I wanted to see how this would look.<br /><br /></p>
            </div>
            <div className="info-col">
              <div className="info-icon" id="messages"></div>
              <p>Makes sending messages on Reddit a plesent experience. Includes seperate views for each conversation, as well as seperating messages from other notification.</p>
            </div>
            <div className="info-col">
              <div className="info-icon" id="apis"></div>
              <p>Uses only official AIP&#39;s so you don&#39;t need anything but an account registered on Reddit. Also all sensitive information is processed entirely on servers owned by Reddit.</p>
            </div>
          </div>

          <div className="author"><a href="https://www.cfrank.org" target="_blank">Chris Frank</a></div>
        </div>
      )
  }

  _login(){
    let loginStart = new Promise(function(resolve){
      resolve(AuthActionController.startLoginSequence());
    });

    // Once the loginSequence has been run start the api requests
    loginStart.then(function(){
      AuthActionController.loginFire();
    });
  }
}
