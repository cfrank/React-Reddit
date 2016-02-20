import AppDispatcher from '../Dispatchers/AppDispatcher';
import FrontConstants from '../Constants/FrontConstants';

export default{
    frontListClick: (id, listType) => {
        AppDispatcher.dispatch({
            actionType: FrontConstants.FRONT_LIST_CLICK,
            id: id,
            listType: listType
        })
    },

    loadFrontPage: (id, listType) => {
        AppDispatcher.dispatch({
            actionType: FrontConstants.LOAD_FRONT_PAGE,
            id: id,
            listType: listType
        })
    }
}
