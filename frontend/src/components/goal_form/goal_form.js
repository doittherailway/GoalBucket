import React from 'react';

class GoalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            goalAmount: 1,
            goalType: '',
            endDate: null,
            timed: false,
        }
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleCheck = this.handleCheck.bind(this);
        this.renderErrors = this.renderErrors.bind(this); 
        this.changeGoalAmount = this.changeGoalAmount.bind(this);
        this.endDateToggle = this.endDateToggle.bind(this);
    } 

    handleChange(type) {
        return ( e => this.setState( { [type]: e.target.value } ) ) 
    }

    changeGoalAmount(e, operation) {
        e.preventDefault();
        let currGoalAmount = this.state.goalAmount;
        let newGoalAmount;

        if (operation === "+") {
            newGoalAmount = currGoalAmount + 1;
        } else {
            if (currGoalAmount - 1 > 0) {
            newGoalAmount = currGoalAmount - 1;
            } else {
                newGoalAmount = currGoalAmount;
            }
        }
        this.setState({
                goalAmount: newGoalAmount
            })
    }

    handleSubmit(e) {
        e.preventDefault(); 
        let goal = this.state; 
        this.props.createGoal(goal);
        this.setState({
            title: '',
            description: '',
            goalAmount: 0,
            goalType: '',
            endDate: Date.now,
            done: false,
            timed: false,
        });
    }

    handleCheck(){
        this.setState( { timed: !this.state.timed } ); 
    }

    endDateToggle(){
        if (this.state.timed === true) {
            return(
                <div className="input">
                    <label>end date</label>
                    <input type="date" className="goal-input"
                        onChange={this.handleChange('endDate')}
                        value={this.state.endDate} />
                </div>
            );
        } else {
            return null
        }
    }

    renderErrors() { 
        if ( this.props.errors.length !== 0 ) {
            return (
                <ul>
                    {this.props.errors.map((err) => <li>{err}</li>)}
                </ul>
            );
        }
    }
    
    render() {
        return(
            <div className="goal-form-outer-div">
                <form className="goal-form" onSubmit={this.handleSubmit}>
                    <div className="add-goal-header-box">
                        <h3>Add a new Goal</h3>
                    </div>
                    <div className="input-div">
                        <label>title</label>
                        <input className="goal-input" type="text" placeholder="Name your goal"
                            onChange={this.handleChange('title')}
                            value={this.state.title}/>
                    </div>

                    <div className="input-div">
                        <label>description</label>
                        <textarea 
                            placeholder="Describe your goal"
                            onChange={this.handleChange('description')}
                            value={this.state.description}/>
                    </div>

                    <div className="input-amt">
                        
                        <label>goal amount</label>
                        <div className="input-amount-box">
                            <button className="input-amt-btn-minus" onClick={(e) => {this.changeGoalAmount(e, '-')}}>-</button>
                            <input className="input-amount" type="text" 
                                onChange={this.handleChange('goalAmount')}
                                value={this.state.goalAmount}/>
                            <button className="input-amt-btn-plus" onClick={(e) => { this.changeGoalAmount(e, '+') }}>+</button>
                        </div>
                    </div>

                    <div className="input-div">
                        <label>goal type</label>
                        <input className="goal-input" type="text" placeholder="eg. hikes"
                            onChange={this.handleChange('goalType')}
                            value={this.state.goalType}/>
                    </div>

                    <div className="input-div">
                        <label>timed <p className="timed-optional-txt">(Optional)</p>
                            <input type="checkbox" className="goal-input-check" 
                                defaultChecked={this.state.timed}
                                onChange={this.handleCheck}/>
                        </label>
                    </div>
                    {this.endDateToggle()}

                <div className="goal-submit-div">
                    <button className="goal-submit-btn">submit</button>
                </div>
                {this.renderErrors()}
            </form>
        </div>
        );
    }
}

export default GoalForm;