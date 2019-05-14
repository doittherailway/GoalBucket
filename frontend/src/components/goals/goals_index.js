import React from 'react';
import { withRouter } from 'react-router-dom';
import GoalIndexItem from './goal_index_item';

class Goal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            goals: []
        }
    }

    componentWillMount() {
        this.props.fetchGoals()
        .then(() => this.props.fetchUsers()); 
    }

    componentWillReceiveProps(newState) {
        this.setState({ goals: newState.goals });
    }

    render() {
        if (this.state.goals.length === 0) {
            return (<div>There are no Goals</div>)
        } else {
            return (
                <div className="goals-index">
                    <h2 className="goal-title">All Goals</h2>
                    {this.state.goals.map(goal => (
                        <GoalIndexItem key={goal._id} goal={goal} patchGoal={this.props.patchGoal} currentUser={this.props.currentUser} />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Goal);