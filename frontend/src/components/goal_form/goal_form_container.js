import { connect } from 'react-redux'; 
import GoalForm from './goal_form'; 
import { createGoal } from '../../actions/goal_actions';  

const mapStateToProps = state => ({
    currentUserId: state.session.user,
    errors: state.errors.goals
}); 

const mapDispatchToProps = dispatch => ({
    createGoal: data => dispatch(createGoal(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalForm);
