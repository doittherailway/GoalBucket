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
    return axios.patch(`/api/goals/${goal._id}`, goal)
}; 