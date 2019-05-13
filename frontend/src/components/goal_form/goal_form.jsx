import React from 'react';

class GoalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    } 
    
    render() {
        return(
            <div className="goal-form">
                <div>
                    <label></label>
                    <input type="text"/>
                </div>
            </div>
        );
    }
}

export default GoalForm;