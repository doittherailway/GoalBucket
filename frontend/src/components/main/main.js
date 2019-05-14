import React from 'react';
import { connect } from 'react-redux';

import { GoalsContainer } from '../goals/goals_container';
import ProfileContainer from '../profile/profile_container';
import CreateGoalFormContainer from '../goal_form/goal_form_container'; 
import AsideContainer from '../aside/aside-container';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = { selected: 'goals' }
        this.switchPane = this.switchPane.bind(this);
    }

    switchPane(name) {
        this.setState({ selected: name })
    }

    render() {
        return (
            <div className='main-page'>
                <div>
                    <AsideContainer switchPane={this.switchPane} />
                    <div className='main-page-right' id={this.props.aside ? '' : 'aside-overlay' }>
                        {this.state.selected === 'goals' ? <GoalsContainer /> : ''}
                        {this.state.selected === 'profile' ? <ProfileContainer /> : ''}
                        {this.state.selected === 'create' ? <CreateGoalFormContainer /> : ''}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    aside: state.ui.aside
});

export default connect(mapStateToProps)(Main);