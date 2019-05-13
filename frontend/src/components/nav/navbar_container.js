import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { receiveModal, showAside, hideAside } from '../../actions/ui_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    aside: state.ui.aside
});

const mapDispatchToProps = dispatch => ({
    receiveModal: modal => dispatch(receiveModal(modal)),
    logout: () => dispatch(logout()),
    showAside: () => dispatch(showAside()),
    hideAside: () => dispatch(hideAside())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);