import React from 'react';

class GoalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            goalAmount: 0,
            goalType: '',
            endDate: null,
            timed: false,
        }
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleCheck = this.handleCheck.bind(this);
    } 

    handleChange(type) {
        return ( e => this.setState( { [type]: e.target.value } ) ) 
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
    
    render() {
        return(
            <form className="goal-form" onSubmit={this.handleSubmit}>

                <div className="input">
                    <label>title</label>
                    <input type="text" 
                        onChange={this.handleChange('title')}
                        value={this.state.title}/>
                </div>

                <div className="input">
                    <label>description</label>
                    <textarea 
                        onChange={this.handleChange('description')}
                        value={this.state.description}/>
                </div>

                <div className="input">
                    <label>goal amount</label>
                    <input type="number" 
                        onChange={this.handleChange('goalAmount')}
                        value={this.state.goalAmount}/>
                </div>

                <div className="input">
                    <label>goal type</label>
                    <input type="text" 
                        onChange={this.handleChange('goalType')}
                        value={this.state.goalType}/>
                </div>

                <div className="input">
                    <label>timed
                        <input type="checkbox"
                            defaultChecked={this.state.timed}
                            onChange={this.handleCheck}/>
                    </label>
                </div>

                <div className="input">
                    <label>end date</label>
                    <input type="date" 
                        onChange={this.handleChange('endDate')}
                        value={this.state.endDate}/>
                </div>
                
                <button>submit</button>
            </form>
        );
    }
}

export default GoalForm;