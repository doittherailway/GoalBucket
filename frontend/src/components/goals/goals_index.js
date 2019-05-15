import React from 'react';
import { withRouter } from 'react-router-dom';
import GoalIndexItem from './goal_index_item';
import { sortByCreateDate } from '../../util/goals_selector';

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
        this.setState({ goals: sortByCreateDate(newState.goals) });
    }

    render() {
        if (this.state.goals.length === 0) {
            return (<div>There are no Goals</div>)
        } else {
            return (
                <div className="goals-index">
                    {this.props.filtered ? '' : <h2 className="goal-title">All Goals</h2>}
                    {this.state.goals.map(goal => (
                        <GoalIndexItem key={goal._id} 
                            goal={goal} 
                            patchGoal={this.props.patchGoal} 
                            createCheer={this.props.createCheer} 
                            deleteCheer={this.props.deleteCheer}
                            currentUser={this.props.currentUser}
                            users={this.props.users} 
                            filtered={this.props.filtered} />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Goal);