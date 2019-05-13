import React from 'react';

class GoalIndexItem extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.goal.title}</h3>
                <h6>{this.props.goal.description}</h6>
                <h6>{this.props.goal.goalAmount}</h6>
                <h6>{this.props.goal.goalType}</h6>
                <h6>{this.props.goal.updateDate}</h6>
                <h6>{this.props.goal.finishDate}</h6>
                <h6>{this.props.goal.endDate}</h6>
            </div>
        );
    }
}

export default GoalIndexItem;