import { combineReducers } from 'redux';
import session from './session_api_reducer';
import errors from './errors_reducer';
import tweets from './tweets_reducer';
import ui from './ui_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    tweets,
    ui
});

export default RootReducer;