import React from 'react';
import AuthenticatedArea from '../AuthenticatedArea';
import FrontActions from '../../Actions/FrontActions';
import FrontStore from '../../Stores/FrontStore';

class Front extends React.Component{
    constructor(){
        super();
        this.state = this.getState();
        FrontActions.testAction();
        this._onStoreChange = this._onStoreChange.bind(this);
    }

    componentDidMount(){
        FrontStore.addChangeListener(this._onStoreChange);
    }

    componentWillUnmount(){
        FrontStore.removeChangeListener(this._onStoreChange);
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
            <div className="front-reddit-list">
                <p>Hello {this.state.hello}</p>
            </div>
        )
    }
}

export default AuthenticatedArea(Front);
