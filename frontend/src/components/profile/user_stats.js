import React from 'react';
import { goalStatsMulti } from '../../util/user_stats_util';

const UserStats = ({ goals }) => {

    let goalStats = goalStatsMulti(goals);

    return (
        <div>
            <div>
                Total Goals Created: {goalStats.goalCount}
                Total Goals Completed: {goalStats.goalCountComplete}
                Percent of Goals Completed: {goalStats.goalPercent}
                Shortest Goal Completed: {goalStats.shortestGoal.title}, {goalStates.shortestGoal.length}
                Longest Goal Completed: {goalStats.longestGoal.title}, {goalStates.longestGoal.length}
            </div>
        </div>
    )
}

export default UserStats
