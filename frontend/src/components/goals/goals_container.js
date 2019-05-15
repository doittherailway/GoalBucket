import { connect } from 'react-redux';
import { fetchGoals, patchGoal, createCheer, deleteCheer } from '../../actions/goal_actions';
import { fetchUsers } from '../../actions/user_actions'; 
import { selectUserGoals } from '../../util/goals_selector';
import GoalsIndex from './goals_index';

const mapStateToPropsIndex = (state) => {
    return {
        goals: Object.values(state.entities.goals),
        currentUser: state.session.user,
        filtered: false
    };
};

const mapStateToPropsProfile = (state) => {
    return {
        goals: selectUserGoals(state, state.session.user.id),
        currentUser: state.session.user,
        filtered: true
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGoals: () => dispatch(fetchGoals()),
        patchGoal: (goal) => dispatch(patchGoal(goal)),
        fetchUsers: () => dispatch(fetchUsers()),
        createCheer: (goalId) => dispatch(createCheer(goalId)),
        deleteCheer: (goalId) => dispatch(deleteCheer(goalId))
    };
};

export const GoalsContainer = connect(mapStateToPropsIndex,
    mapDispatchToProps)(GoalsIndex);

export const GoalsProfileContainer = connect(mapStateToPropsProfile,
    mapDispatchToProps)(GoalsIndex);