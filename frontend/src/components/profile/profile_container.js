import { connect } from 'react-redux';
import { selectUserGoals } from '../../util/goals_selector';
import Profile from './profile';

const mapStateToProps = (state) => {
    let selectedGoals = selectUserGoals(state, state.session.user.id);
    return ({
        currentUser: state.session.user,
        goals: selectedGoals
    });
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);