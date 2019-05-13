import { 
    RECEIVE_GOAL_ERRORS,
    RECEIVE_USER_GOALS, 
    RECEIVE_GOALS, 
    RECEIVE_GOAL
} from '../actions/goal_actions'; 

const _nullerrors = [];

const goalErrorsReducer = (state = _nullerrors, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_GOAL_ERRORS: 
            return Object.values(action.errors);
        case RECEIVE_GOALS: 
            return _nullerrors;
        case RECEIVE_USER_GOALS: 
            return _nullerrors;
        case RECEIVE_GOAL: 
            return _nullerrors;
        default: 
            return state; 
    } 
}

export default goalErrorsReducer; 
