import React from 'react';
import AuthActions from '../../Actions/AuthActions';
import { browserHistory } from 'react-router';

export default class Logout extends React.Component{
    constructor(){
        super();
        this.logout();
    }

    render(){
        return(
            <p>Please wait while you are logged out...</p>
        )
    }

    logout(){
        AuthActions.logout();
    }
}
