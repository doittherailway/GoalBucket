import { connect } from 'react-redux'; 
import GoalForm from 'goal_form'; 
// need to import the createGoal action 

const mapStateToProps = state => ({
    currentUserId: state.session.user.id
}); 

const mapDispatchToProps = dispatch => ({
    createGoal: data => dispatch()
});

export default connect(mapStateToProps)(GoalForm);
