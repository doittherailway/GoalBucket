import axios from 'axios';

export const getGoals = () => {
    return axios.get('/api/goals');
};

export const getUserGoals = id => {
    return axios.get(`/api/goals/user/${id}`);
};

export const addGoal = data => {
    return axios.post('/api/goals/', data);
};

export const updateGoal = goal => {
    return axios.patch(`/api/goals/${goal._id}`, goal);
}; 

export const addCheer = goalId => {
    return axios.patch('/api/goals/cheers', { goalId });
};

export const removeCheer = goalId => {
    return axios.delete(`/api/goals/cheers/${goalId}`);
};