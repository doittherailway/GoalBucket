import { connect } from 'react-redux';
import { fetchGoals, patchGoal } from '../../actions/goal_actions';
import GoalsIndex from './goals_index';

const mapStateToProps = (state) => {
    return {
        goals: Object.values(state.goals.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGoals: () => dispatch(fetchGoals()),
        patchGoal: (goal) => dispatch(patchGoal(goal))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalsIndex);