import React from 'react';
import { goalStatsMulti } from '../../util/user_stats_util';

const UserStats = ({ goals }) => {
    let goalStats = goalStatsMulti(goals);

    const shortestGoal = () => {
        if (goalStats.shortestGoal.title === "N/A") {
            return <p className="stats-number"> - </p>;
        } else {
            return <p className="stats-number">{goalStats.shortestGoal.title}, {goalStats.shortestGoal.length} days</p >
        }
    }

    const longestGoal = () => {
        if (goalStats.longestGoal.title === "N/A") {
            return <p className="stats-number"> - </p>;
        } else {
            return <p className="stats-number">{goalStats.longestGoal.title}, {goalStats.longestGoal.length} days</p >
        }
    }

    return (
        <div>
            <div className="stats-div">
                <h3> Goal Stats</h3>
                <div className="stats-line">
                    <p className="stats-text">Total Goals Created: </p><p className="stats-number">{goalStats.goalCount}</p>
                </div>
                <div className="stats-line">
                    <p className="stats-text">Total Goals Completed: </p><p className="stats-number">{goalStats.goalCountComplete}</p>
                </div>
                <div className="stats-line">
                    <p className="stats-text">Percent Completed: </p><p className="stats-number">{goalStats.goalPercent}%</p>
                </div>
                <div className="stats-line">
                    <p className="stats-text">Shortest Completed: </p>{shortestGoal()}
                </div>
                <div className="stats-line">
                    <p className="stats-text">Longest Completed: </p>{longestGoal()}
                </div>
            </div>
        </div>
    )
}

export default UserStats
