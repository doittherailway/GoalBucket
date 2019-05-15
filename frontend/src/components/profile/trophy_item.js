import React from 'react'; 

class TrophyItem extends React.Component {

    render() {
        return this.props.goal === undefined ? ( null ) : (
            <div className="trophy">
                <i class="fas fa-trophy"></i>
                <p>{this.props.goal.title}</p>
            </div>
        )
    }
}

export default TrophyItem; 