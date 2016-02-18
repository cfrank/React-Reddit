import React from 'react';
import AuthenticatedArea from '../AuthenticatedArea';
import FrontActions from '../../Actions/FrontActions';
import FrontStore from '../../Stores/FrontStore';
import FrontList from './FrontList';

class Front extends React.Component{
    constructor(){
        super();
        this.state = this.getState();
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
            currentListType: 'hello'
        }
    }

    render(){
        return(
            <div className="front-container">
                <div className="front-reddit-list">
                    {this.state.currentListType}
                </div>

                <div className="reddit-list-type">
                    <FrontList onClick={this.listItemClick}/>
                </div>
            </div>
        )
    }

    listItemClick(event){
        console.log(event);
    }
}

export default AuthenticatedArea(Front);
