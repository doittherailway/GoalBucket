import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { clearModal } from '../../actions/ui_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user)),
        clearModal: () => dispatch(clearModal())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);