import { connect } from 'react-redux';
import { fetchGoals } from '../../actions/goal_actions';
import GoalsIndex from './goals_index';

const mapStateToProps = (state) => {
    return {
        goals: Object.values(state.goals.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGoals: () => dispatch(fetchGoals())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalsIndex);