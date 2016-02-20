import BaseStore from './BaseStore';
import FrontActions from '../Actions/FrontActions';
import FrontConstants from '../Constants/FrontConstants';

class FrontStore extends BaseStore{
    constructor(){
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this.currentFrontListId = 1;
        this.currentFrontListType = 'Hot';
    }

    _registerToActions(action){
        switch(action.actionType){
            case FrontConstants.FRONT_LIST_CLICK:
                this.currentFrontListId = action.id;
                this.currentFrontListType = action.listType;
                this.emitChange();
                break;
            default:
                console.log("Hit the Store");
                break;
        }
    }
}

export default new FrontStore();
