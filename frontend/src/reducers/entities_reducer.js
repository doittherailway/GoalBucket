import goals from './goals_reducer';
import users from './users_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
    goals,
    users
});

export default entitiesReducer; 