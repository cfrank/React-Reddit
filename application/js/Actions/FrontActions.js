import AppDispatcher from '../Dispatchers/AppDispatcher';
import FrontConstants from '../Constants/FrontConstants';

export default{
    frontListClick: (id, listType) => {
        console.log(`${id} + ${listType}`);
        AppDispatcher.dispatch({
            actionType: FrontConstants.FRONT_LIST_CLICK,
            id: id,
            listType: listType
        })
    }
}
