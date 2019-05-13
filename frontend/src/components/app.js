import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBarContainer from './nav/navbar_container';
// import TweetsContainer from './tweets/tweets_container';
import GoalsContainer from './goals/goals_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';

import CreateGoalFormContainer from './goal_form/goal_form_container'; 


const App = (props) => (
    <div>
        {props.modal === 'login' ? <AuthRoute exact path="/" component={LoginFormContainer} /> : '' }
        {props.modal === 'signup' ? <AuthRoute exact path="/" component={SignupFormContainer} /> : ''}
        <ProtectedRoute path="/"  component={NavBarContainer} />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <ProtectedRoute exact path="/goals" component={GoalsContainer} />
            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
            <ProtectedRoute exact path="/new_goal" component={CreateGoalFormContainer} />

        </Switch>
    </div>
);

const mapStateToProps = state => ({
    modal: state.ui.modal
});

export default connect(mapStateToProps)(App);