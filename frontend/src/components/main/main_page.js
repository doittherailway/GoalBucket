import React from 'react';
import { connect } from 'react-redux';
import { receiveModal } from '../../actions/ui_actions';

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }

    handleSignup() {
        this.props.receiveModal('signup')
    }

    handleLogin() {
        this.props.receiveModal('login')
    }

    render() {
        return (
            <div className="splash">
                <div className="splash-left">
                    <img className="splash-img-1" src="/images/splash_1.jpg" alt=""/>
                    <img className="splash-img-2"src="/images/splash_2.jpg" alt="" />
                    <img className="splash-img-3" src="/images/splash_3.jpg" alt="" />
                </div>
                <div className="splash-right">
                    <div className="auth-modal">
                        <p>
                            <strong onClick={this.handleSignup}>register </strong>
                            /<strong onClick={this.handleLogin}> sign in</strong>
                        </p>
                    </div>
                    <h1 className="splash-logo">GOAL</h1>
                    <h1 className="splash-logo">BUCKET</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat.</p>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    receiveModal: modal => dispatch(receiveModal(modal))
})

export default connect(null, mapDispatchToProps)(MainPage);