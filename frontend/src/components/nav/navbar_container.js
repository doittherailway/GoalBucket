import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { receiveModal } from '../../actions/ui_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    receiveModal: modal => dispatch(receiveModal(modal)),
    logout: () => dispatch(logout())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);