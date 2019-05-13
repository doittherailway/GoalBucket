import { connect } from 'react-redux';
import { fetchAllGoals } from '../../actions/goal_actions';
import Goals from './goals';

const mapStateToProps = (state) => {
    return {
        goals: Object.values(state.goals.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllGoals: () => dispatch(fetchAllGoals())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Goals);