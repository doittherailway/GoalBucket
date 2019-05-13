import { getGoals, getUserGoals, addGoal } from '../util/goal_api_util'; 

export const RECEIVE_GOALS = "RECEIVE_GOALS"; 
export const RECEIVE_GOAL = "RECEIVE_GOAL";
export const RECEIVE_USER_GOALS = "RECEIVE_USER_GOALS"; 


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

export const fetchGoals = () => dispatch => (
    getGoals()
        .then(goals => dispatch(receiveGoals(goals)))
        .catch(err => console.log(err))

);

export const createGoal = goal => dispatch => {
    // debugger
    return addGoal(goal) 
        .then(newGoal => dispatch(receiveGoal(newGoal)))
        .catch(err => console.log(err))
};

export const fetchUserGoals = () => dispatch => (
    getUserGoals()
        .then(userGoals => dispatch(receiveUserGoals(userGoals)))
        .catch(err => console.log(err))
);

