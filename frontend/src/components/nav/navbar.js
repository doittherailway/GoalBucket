import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    renderHamburger() {
        if (this.props.aside) {
            return (
                <div className='aside-button'
                    id="aside-selected"
                    onClick={this.props.hideAside}>
                    <i className="fa fa-bars"></i>
                </div>
            )
        } else {
            return (
                <div className='aside-button'
                    onClick={this.props.showAside}>
                    <i className="fa fa-bars"></i>
                </div>
            )
        }
    }

    render() {
        return (
            <div className='nav-bar-main'>
                {this.renderHamburger()}
                <h1>GOAL BUCKET</h1>
                <div onClick={this.logoutUser}
                    className='logout-button'>
                    <div>Logout</div>
                </div>
            </div>
        );
    }
}

export default NavBar;