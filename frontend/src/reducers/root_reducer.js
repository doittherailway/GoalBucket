import { combineReducers } from 'redux';
import session from './session_api_reducer';
import errors from './errors_reducer';
import tweets from './tweets_reducer';
import ui from './ui_reducer';
import goals from './goals_reducer'; 

const RootReducer = combineReducers({
    session,
    errors,
    goals,
    tweets,
    ui
});

export default RootReducer;