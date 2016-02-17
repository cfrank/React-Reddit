import React from 'react';
import AuthStore from '../Stores/AuthStore';
import { browserHistory } from 'react-router';

export default (ComponentToBeRendered) => {
    class AuthenticatedArea extends React.Component{
        constructor(props){
            super(props);
            this.state = { loggedIn: AuthStore.isLoggedIn() };
            this._updateState = this._updateState.bind(this);
        }

        componentDidMount(){
            if(!this.state.loggedIn){
                browserHistory.push('/');
            }
        }

        _updateState(){
            return{
                loggedIn: AuthStore.loggedIn
            }
        }

        render(){
            return(
                <ComponentToBeRendered {...this.props} />
            );
        }
    }

    return AuthenticatedArea;
};
