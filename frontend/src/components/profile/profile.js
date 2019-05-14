import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentWillMount() {
        console.log(this.props.currentUser.id)
    }

    componentWillReceiveProps(newState) {
    }

    render() {
        return (
        <div>
            <div className="user-top-profile">
                <div className="user-top-box">
                    <div className="user-top-username">
                        <div className="user-profile-icon">
                            <img className="user-icon" src="/images/user_icon_pug.png" alt="user icon" />
                        </div>
                        <div className="user-profile-username">
                            Username
                        </div>
                    </div>
                    <div className="user-top-stats">
                        [stats]
                    </div>   
                </div>
                <div className="user-trophies">
                    [trophies]
                </div>
            </div>
        </div>
        );
    }
}

export default Profile;