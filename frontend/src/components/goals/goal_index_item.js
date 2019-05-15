import React from 'react';

class GoalIndexItem extends React.Component {

    constructor(props) {
        super(props);
        let currAmt = this.props.goal.goalCurrentAmount;
        // if( currAmt === 0 ) {
        //     currAmt = currAmt + 1;
        // }
        this.state = {
            goalCurrentAmount: currAmt,
            cheerColor: "rgb(63, 125, 240)"
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

    showUpdate() {
        if(this.props.goal.user === this.props.currentUser.id ) {
            return (
                <span className="cheer-span">
                    <button className="plus-button" onClick={(e) => { this.updateGoalAmount(e) }}>+</button>
                    <span>update</span>
                </span>
            );
        } else {
            // show cheers
            return (
                <span className="cheer-span">
                    <i className="fas fa-child" ref="cheer" onClick={(e) => { this.addCheer() }}></i>
                    <span>{this.props.goal.cheers.length} cheers</span>
                </span>
            );
        }
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

    overlayImage(percentageVal) {
        if( percentageVal === 100 ) {
            return (
                <div id="overlay-image">
                    <img src="/images/completed-stamp.png" alt="completed-stamp"/>
                </div>
            );
        }

        return (
            <div id="overlay-image">
            </div>
        );

    }

    componentDidUpdate() {
        let cheers = this.props.goal.cheers;
        for (let i = 0; i < cheers.length; i++) {
            // console.log(this.props.currentUser.id);
            if (cheers[i] === this.props.currentUser.id) {
                this.refs.cheer.style.color = this.state.cheerColor;
            }
        }
    }

    addCheer() {
        if (this.refs.cheer.style.color === this.state.cheerColor ) {
            this.props.deleteCheer(this.props.goal._id)
                .then((cheer) => this.refs.cheer.style.color = "");
        }
        else {
            this.props.createCheer(this.props.goal._id)
                .then((cheer) => this.refs.cheer.style.color = this.state.cheerColor);
        }
    }

    getUsername() {
        let usrname = "";

        if (!this.props.filtered) {
            for(let i=0; i<this.props.users.length; i++) {
                if( this.props.users[i]._id === this.props.goal.user) {
                    usrname = this.props.users[i].username;
                }
            }
        
            return(
                <h6>Username: {usrname}</h6>
            );
        }
    }

    render() {
        
        let percentageVal = Math.floor(((this.state.goalCurrentAmount)/this.props.goal.goalAmount)*100);
        let percentageCompleted = percentageVal + '%';
        let percentageRemaining = (100 - percentageVal) + '%';

        return (
            <div className="goal-index-item">
                <h3>Title: {this.props.goal.title}</h3>
                {this.getUsername()}
                <h6>Description: {this.props.goal.description}</h6>

                <div className="progress-info">
                    <div className="progress-bar">
                        {this.progressBarSpan(percentageCompleted)}
                        {this.progressBarSpanRemaining(percentageRemaining)}
                    </div>
                    {this.showUpdate()}
                    {this.overlayImage(percentageVal)}
                    {/* {this.updateActualCheer()}     */}
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