import { 
    RECEIVE_GOALS, 
    RECEIVE_GOAL,
    RECEIVE_USER_GOALS
    } from '../actions/goal_actions'; 

const goalsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_GOALS: 
            newState.all = action.goals.data; 
            return newState; 
        case RECEIVE_GOAL: 
            newState.new = action.goal.data; 
            return newState; 
        case RECEIVE_USER_GOALS: 
            newState.user = action.goals.data; 
            return newState; 
        default: 
            return state; 
    }
};

export default goalsReducer; 