import AppDispatcher from '../Dispatchers/AppDispatcher';
import FrontConstants from '../Constants/FrontConstants';

export default{
    testAction: () => {
        AppDispatcher.dispatch({
            actionType: FrontConstants.TEST_ACTION
        })
    }
}
