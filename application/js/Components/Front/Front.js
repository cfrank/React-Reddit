import React from 'react';
import AuthenticatedArea from '../AuthenticatedArea';
import FrontActions from '../../Actions/FrontActions';
import FrontStore from '../../Stores/FrontStore';
import FrontList from './FrontList';
import Options from '../../Utils/Options';

// TODO: This might be wronggggg
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
            selectedListItem: FrontStore.currentFrontListId,
            selectedListType: FrontStore.currentFrontListType
        }
    }

    render(){
        // Create the front list items
        let frontList = frontListItems.map((thread) =>{
            let id = parseInt(thread.id),
                selected = id === this.state.selectedListItem ? true : false,
                boundClick = this.listItemClick.bind(this, id, thread.list_type);
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
                    {this.state.selectedListItem}
                    <br />
                    {this.state.selectedListType}
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

    listItemClick(id, listType, event){
        if(this.state.selectedListItem !== id){
            let frontListClick = new Promise((resolve) => {
                resolve(FrontActions.frontListClick(id, listType));
            });
            frontListClick.then(() => {
                FrontActions.loadFrontPage(id, listType);
            })
        }
    }
}

export default AuthenticatedArea(Front);
