import React from 'react';
import AuthActions from '../../Actions/AuthActions';
import AuthenticatedArea from '../AuthenticatedArea';
import AuthStore from '../../Stores/AuthStore';

class Front extends React.Component{
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
        this.setState(this.getState());
    }

    getState(){
        return{
            hello: 'hello'
        }
    }

    render(){
        return(
            <p>Hello {this.state.hello}</p>
        )
    }
}

export default AuthenticatedArea(Front);
