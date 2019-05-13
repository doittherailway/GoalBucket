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
        this.props.fetchAllGoals();
    }

    componentWillReceiveProps(newState) {
        this.setState({ goals: newState.goals });
    }

    render() {
        if (this.state.goals.length === 0) {
            return (<div>There are no Goals</div>)
        } else {
            return (
                <div>
                    <h2>All Goals</h2>
                    {this.state.goals.map(goal => (
                        <GoalIndexItem key={goal._id} goal={goal} />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Goal);