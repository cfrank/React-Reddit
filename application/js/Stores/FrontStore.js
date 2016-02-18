import BaseStore from './BaseStore';
import FrontActions from '../Actions/FrontActions';
import FrontConstants from '../Constants/FrontConstants';

class FrontStore extends BaseStore{
    constructor(){
        super();
        this.subscribe(() => this._registerToActions.bind(this));
    }

    _registerToActions(action){
        switch(action.actionType){
            case FrontConstants.TEST_ACTION:
                console.log("Test Action Fired!");
                break;
            default:
                console.log("Hit the Store");
                break;
        }
    }
}

export default new FrontStore();
