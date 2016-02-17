import React from 'react';
import AuthStore from '../Stores/AuthStore.js';
import AuthActionController from '../ActionControllers/AuthActionController';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = this.getState();
    this._onStoreChange = this._onStoreChange.bind(this);
  }

  componentDidMount(){
    AuthStore.addChangeListener(this._onStoreChange);
    let params = window.location.search;
    let state = localStorage.getItem('LoginAuthState');
    AuthActionController.retrieveCode(params, state);
  }

  componentWillUnmount(){
    AuthStore.removeChangeListener(this._onStoreChange);
    // Remove the state value from the users localStorage
    localStorage.removeItem('LoginAuthState');
  }

  _onStoreChange(){
    this.setState(this.getState());
  }

  getState(){
    return{
      errors: AuthStore.errors,
      areThereErrors: AuthStore.areThereErrors
    }
  }

  render(){
      return(
        <div className="gateway">
          {this.state.areThereErrors ?
            this._showErrors() :
            <h1>Please wait while you are logged in...</h1>
          }
        </div>
      )
  }

  _showErrors(){
    var errors = this.state.errors;
    return(
      <div className="error">
        <span className="error-title">{errors.error.title}</span>
        <br />
        <span className="error-subtitle">{errors.error.subtext}</span>
      </div>
    )
  }
}
