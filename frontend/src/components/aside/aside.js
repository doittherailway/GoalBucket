import React from 'react';

class Aside extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 'goals'
        }

        this.handleGoals = this.handleGoals.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleGoals(e) {
        e.preventDefault();
        this.setState({ selected: 'goals' });
        this.props.switchPane('goals');
    }

    handleProfile(e) {
        e.preventDefault();
        this.setState({ selected: 'profile' });
        this.props.switchPane('profile');
    }

    handleCreate(e) {
        e.preventDefault();
        this.setState({ selected: 'create' });
        this.props.switchPane('create');
    }

    render() {
        return (
            <div className='aside-main'>
                <div onClick={this.handleGoals}
                    className={this.state.selected === 'goals' ? 'selected-aside' : ''}>
                    <div className='aside-icon-container'>
                        <i className="fas fa-mountain"></i>
                    </div>
                    <div className='aside-menu-text'>Goals</div>
                </div>
                <div onClick={this.handleProfile}
                    className={this.state.selected === 'profile' ? 'selected-aside' : ''}>
                    <div className='aside-icon-container'>
                        <i className="far fa-user"></i>
                    </div>
                    <div className='aside-menu-text'>Profile</div>
                </div>
                <div onClick={this.handleCreate}
                    className={this.state.selected === 'create' ? 'selected-aside' : ''}>
                    <div className='aside-icon-container'>
                        <i className="far fa-plus-square"></i>
                    </div>
                    <div className='aside-menu-text'>Create Goal</div>
                </div>
            </div>
        );
    }
}

export default Aside;