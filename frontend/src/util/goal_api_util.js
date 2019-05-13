import axios from 'axios';

export const getGoals = () => {
    return axios.get('/api/goals');
};

export const getUserGoals = id => {
    return axios.get(`/api/goals/user/${id}`);
};

export const addGoal = data => {
    // debugger
    return axios.post('/api/goals/', data);
};