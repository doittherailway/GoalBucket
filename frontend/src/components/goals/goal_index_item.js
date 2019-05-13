import React from 'react';

class GoalIndexItem extends React.Component {
    render() {
        return (
            <div className="goal-index-item">
                <h3>Title: {this.props.goal.title}</h3>
                <h6>Description: {this.props.goal.description}</h6>
                <h6>Goal amount: {this.props.goal.goalAmount}</h6>
                <h6>Goal type: {this.props.goal.goalType}</h6>
                <h6>Update type: {this.props.goal.updateDate}</h6>
                <h6>Finish date: {this.props.goal.finishDate}</h6>
                <h6>End date: {this.props.goal.endDate}</h6>
            </div>
        );
    }
}

export default GoalIndexItem;