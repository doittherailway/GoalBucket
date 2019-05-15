import React from 'react'; 

class TrophyItem extends React.Component {

    constructor(props) {
        super(props);
        this.renderTitle = this.renderTitle.bind(this); 
    }

    renderTitle() {
        let  title = this.props.goal.title; 
        if (title.length > 15) {
            return title.slice(0,15) + "..."
        } else {
            return title 
        }
    }

    render() {
        return(
            <div className="trophy">
                <i class="fas fa-trophy"></i>
                <p>{this.renderTitle()}</p>
            </div>
        );
    }
}

export default TrophyItem; 