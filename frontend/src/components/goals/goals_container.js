import { connect } from 'react-redux';
import { fetchGoals, patchGoal } from '../../actions/goal_actions';
import { fetchUsers } from '../../actions/user_actions'; 
import GoalsIndex from './goals_index';

const mapStateToProps = (state) => {
    return {
        goals: Object.values(state.entities.goals),
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGoals: () => dispatch(fetchGoals()),
        patchGoal: (goal) => dispatch(patchGoal(goal)),
        fetchUsers: () => dispatch(fetchUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalsIndex);