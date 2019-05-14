import React from 'react';
import { goalStatsMulti } from '../../util/user_stats_util';

const UserStats = ({ goals }) => {
    let goalStats = goalStatsMulti(goals);

    return (
        <div>
            <div>
                <p>Total Goals Created: {goalStats.goalCount}</p>
                <p>Total Goals Completed: {goalStats.goalCountComplete}</p>
                <p>Percent of Goals Completed: {goalStats.goalPercent}</p>
                <p>Shortest Goal Completed: { goalStats.shortestGoal.title }, { goalStats.shortestGoal.length }</p >
                <p>Longest Goal Completed: { goalStats.longestGoal.title }, { goalStats.longestGoal.length }</p >
            </div>
        </div>
    )
}

export default UserStats
