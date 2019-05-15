import React from 'react'; 
import TrophyItem from './trophy_item'; 

class Trophies extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            startIndex: 0,
            endIndex: 4, 
            total: this.props.goals.length
        }
        this.renderTrophies = this.renderTrophies.bind(this); 
        this.scrollLeft = this.scrollLeft.bind(this); 
        this.scrollRight = this.scrollRight.bind(this); 
        this.doneGoals = this.doneGoals.bind(this); 
    }

    renderTrophies() {
        let { startIndex, endIndex } = this.state;
        let trophies = []; 
        let done = this.doneGoals(); 
        for(let i = startIndex; i < endIndex; i++) {
            trophies.push(<TrophyItem key={i} goal={this.props.goals[i]}/>)
        }
        return trophies; 
    }

    doneGoals() {
        return this.props.goals.filter( goal =>  (goal.done === true) );  
    }

    scrollLeft() {
        if ( this.state.startIndex === 0 ) {
            return null; 
        } else {
            this.setState({
                startIndex: (this.state.startIndex - 1),
                endIndex: (this.state.endIndex - 1)
            })
        }
    }

    scrollRight() {
        if ( this.state.endIndex === this.state.total ) {
            return null;
        } else {
            this.setState({
                startIndex: (this.state.startIndex + 1),
                endIndex: (this.state.endIndex + 1)
            }); 
        }
    }

    render() { 
        return(
            <div className="trophy-cabinet">
                <i class="fas fa-chevron-circle-left"
                    onClick={this.scrollLeft}></i>
                <ul>
                    { this.renderTrophies() }
                </ul>
                <i class="fas fa-chevron-circle-right"
                    onClick={this.scrollRight}></i>
            </div>
        );
    }
}

export default Trophies; 