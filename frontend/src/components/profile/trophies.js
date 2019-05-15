import React from 'react'; 
import TrophyItem from './trophy_item'; 

class Trophies extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            startIndex: 0,
            endIndex: this.lastOne(), 
            total: this.doneGoals().length
        }
        this.renderTrophies = this.renderTrophies.bind(this); 
        this.scrollLeft = this.scrollLeft.bind(this); 
        this.scrollRight = this.scrollRight.bind(this); 
        this.doneGoals = this.doneGoals.bind(this); 
        this.lastOne = this.lastOne.bind(this); 
    }

    lastOne() {
        let done = this.doneGoals();
        return done.length >= 4 ? 4 : done.length;
    }

    renderTrophies(done) {
        let { startIndex, endIndex } = this.state;
        let trophies = []; 
        for(let i = startIndex; i < endIndex; i++) {
            trophies.push(<TrophyItem key={i} goal={done[i]}/>)
        }
        return trophies; 
    }

    doneGoals() {
        let done = []; 
        this.props.goals.forEach( goal => {
            if (goal.done === true) {
                done.push(goal); 
            }
        });
        return done; 
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
        let goals = this.doneGoals(); 

        return(
            <div className="trophy-cabinet">
                <i class="fas fa-chevron-circle-left"
                    onClick={this.scrollLeft}></i>
                <ul>
                    { this.renderTrophies(goals) }
                </ul>
                <i class="fas fa-chevron-circle-right"
                    onClick={this.scrollRight}></i>
            </div>
        );
    }
}

export default Trophies; 