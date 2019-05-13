import React from 'react';
import { Link } from 'react-router-dom';
// import './navbar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    handleSignup() {
        this.props.receiveModal('signup')
    }

    handleLogin() {
        this.props.receiveModal('login')
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <Link to={'/profile'}>Profile</Link>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div>
                    <div onClick={this.handleSignup}>Sign up</div>
                    <div onClick={this.handleLogin}>Login</div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h1>ACHIEVER</h1>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;