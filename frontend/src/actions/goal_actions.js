import { getGoals, 
    getUserGoals, 
    addGoal,
    updateGoal,
    addCheer,
    removeCheer
} from '../util/goal_api_util'; 

export const RECEIVE_GOALS = "RECEIVE_GOALS"; 
export const RECEIVE_GOAL = "RECEIVE_GOAL";
export const RECEIVE_USER_GOALS = "RECEIVE_USER_GOALS"; 
export const RECEIVE_GOAL_ERRORS = "RECEIVE_GOAL_ERRORS"; 


const receiveGoals = goals => ({
    type: RECEIVE_GOALS, 
    goals
})

const receiveGoal = goal => ({
    type: RECEIVE_GOAL,
    goal
})

const receiveUserGoals = goals => ({
    type: RECEIVE_USER_GOALS, 
    goals
})

const receiveGoalErrors = errors => ({
    type: RECEIVE_GOAL_ERRORS,
    errors
});

export const fetchGoals = () => dispatch => (
    getGoals()
        .then(goals => dispatch(receiveGoals(goals.data)))
        .catch(err => console.log(err.response.data))

);

export const createGoal = goal => dispatch => {
    // debugger
    return addGoal(goal) 
        .then(newGoal => dispatch(receiveGoal(newGoal)))
        .catch(err => dispatch(receiveGoalErrors(err.response.data)));
};

export const fetchUserGoals = () => dispatch => (
    getUserGoals()
        .then(userGoals => dispatch(receiveUserGoals(userGoals)))
        .catch(err => console.log(err.response.data))
);

export const patchGoal = goal => dispatch => (
    updateGoal(goal)
        .then(updatedGoal => dispatch(receiveGoal(updatedGoal)))
        .catch(err => console.log(err.response.data))
);

export const createCheer = goalId => dispatch => (
    addCheer(goalId)
        .then(updatedGoal => dispatch(receiveGoal(updatedGoal)))
        .catch(err => console.log(err.response.data))
);

export const deleteCheer = goalId => dispatch => (
    removeCheer(goalId)
        .then(updatedGoal => dispatch(receiveGoal(updatedGoal)))
        .catch(err => console.log(err.response.data))
);

