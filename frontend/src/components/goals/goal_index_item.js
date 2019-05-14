import React from 'react';

class GoalIndexItem extends React.Component {

    progressBarSpan(percentageCompleted) {
        console.log(percentageCompleted);
        if( percentageCompleted === '100%' ) {
            return (
                <span className="progress-bar-completed-done" style={{ width: percentageCompleted }}></span>
            );
        }
        
        return (
            <span className="progress-bar-completed" style={{ width: percentageCompleted }}></span>
        );
    }

    render() {
        
        let percentageVal = (((this.props.goal.goalCurrentAmount+1)/this.props.goal.goalAmount)*100);
        let percentageCompleted = percentageVal + '%';
        let percentageRemaining = (100 - percentageVal) + '%';
        
        return (
            <div className="goal-index-item">
                <h3>Title: {this.props.goal.title}</h3>
                
                <div className="progress-bar" onClick={()=>this.update()}>
                    {this.progressBarSpan(percentageCompleted)}
                    <span className="progress-bar-remaining" style={{ width: percentageRemaining }}></span>
                </div>

                <h6>Description: {this.props.goal.description}</h6>
                
                {/* 
                <h6>Goal amount: {this.props.goal.goalAmount}</h6>
                <h6>Goal current amount: {this.props.goal.goalCurrentAmount}</h6>
                <h6>Goal type: {this.props.goal.goalType}</h6>
                <h6>Create type: {this.props.goal.createDate}</h6>
                <h6>Update date: {this.props.goal.updateDate}</h6>
                <h6>Finish date: {this.props.goal.finishDate}</h6>
                <h6>End date: {this.props.goal.endDate}</h6> 
                */}

            </div>
        );
    }
}

export default GoalIndexItem;