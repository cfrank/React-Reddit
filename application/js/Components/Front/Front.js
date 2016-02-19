import React from 'react';
import AuthenticatedArea from '../AuthenticatedArea';
import FrontActions from '../../Actions/FrontActions';
import FrontStore from '../../Stores/FrontStore';
import FrontList from './FrontList';
import Options from '../../Utils/Options';

var frontListItems = Options.front_list_items;

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
            // TODO: This might be wrongggg
            frontListItems: frontListItems,
            selectedListItem: 1
        }
    }

    render(){
        // Create the front list items
        let frontList = this.state.frontListItems.map((thread) =>{
            let id = parseInt(thread.id),
                selected = id === this.state.selectedListItem ? true : false,
                boundClick = this.listItemClick.bind(this, id);
            return(
                <FrontList
                    key={thread.id}
                    name={thread.name}
                    listType={thread.list_type}
                    active={selected}
                    onClick={boundClick}
                />
            )
        })
        return(
            <div className="front-container">
                <div className="front-reddit-list">
                    <p>Hello</p>
                </div>

                <div className="reddit-list-type">
                    <div className="front-list">
                        <ul>
                            {frontList}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    listItemClick(id, event){
        if(this.state.selectedListItem !== id)
            console.log(id);
    }
}

export default AuthenticatedArea(Front);
