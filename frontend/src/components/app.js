import React from 'react';
import { connect } from 'react-redux';

import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main';

import Splash from './splash/splash';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = (props) => {
    if (props.loggedIn) {
        return (
            <div>
                <NavBarContainer />
                <MainPage />
            </div>
        )
    } else {
        return (
            <div>
                {props.modal === 'login' ? <LoginFormContainer path="/" /> : '' }
                {props.modal === 'signup' ? <SignupFormContainer path="/" /> : '' }
                <Splash />
            </div>
        )
    }
};

const mapStateToProps = state => ({
    modal: state.ui.modal,
    loggedIn: state.session.isAuthenticated
});

export default connect(mapStateToProps)(App);