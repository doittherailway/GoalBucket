import React from 'react';

class GoalIndexItem extends React.Component {

    constructor(props) {
        super(props);
        let currAmt = this.props.goal.goalCurrentAmount;
        if( currAmt === 0 ) {
            currAmt = currAmt + 1;
        }
        this.state = {
            goalCurrentAmount: currAmt
        }
        this.updateGoalAmount = this.updateGoalAmount.bind(this);
        this.progressBarSpan = this.progressBarSpan.bind(this);
    }

    progressBarSpan(percentageCompleted) {
        // console.log(percentageCompleted);
        if( percentageCompleted === '100%' ) {
            return (
                <span className="progress-bar-completed-done" style={{ width: percentageCompleted }}></span>
            );
        }
        
        return (
            <span className="progress-bar-completed" style={{ width: percentageCompleted }}></span>
        );
    }

    progressBarSpanRemaining(percentageRemaining) {
        // console.log(percentageRemaining);
        if( percentageRemaining === '100%' ) {
            return (
                <span className="progress-bar-remaining-undone" style={{ width: percentageRemaining }}></span>
            );
        }

        return (
            <span className="progress-bar-remaining" style={{ width: percentageRemaining }}></span>
        );
    }

    updateGoalAmount(e) {
        e.preventDefault();
        // console.log(this.state.goalCurrentAmount);
        // console.log(this.props.goal.goalAmount);
        if( this.state.goalCurrentAmount < this.props.goal.goalAmount ) {
            let currAmt = this.state.goalCurrentAmount + 1;

            let currGoal = this.props.goal;
            currGoal.goalCurrentAmount = currAmt;

            // console.log(currAmt);
            this.props.patchGoal(currGoal)
                .then(this.setState({ goalCurrentAmount: currAmt }));
        }
    }

    render() {
        
        let percentageVal = Math.floor(((this.state.goalCurrentAmount)/this.props.goal.goalAmount)*100);
        let percentageCompleted = percentageVal + '%';
        let percentageRemaining = (100 - percentageVal) + '%';
        
        return (
            <div className="goal-index-item">
                <h3>Title: {this.props.goal.title}</h3>
                
                <h6>Description: {this.props.goal.description}</h6>

                <div className="progress-info">
                    <div className="progress-bar">
                        {this.progressBarSpan(percentageCompleted)}
                        {this.progressBarSpanRemaining(percentageRemaining)}
                    </div>
                    <button className="plus-button" onClick={(e) => { this.updateGoalAmount(e) }}>+</button>
                </div>

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