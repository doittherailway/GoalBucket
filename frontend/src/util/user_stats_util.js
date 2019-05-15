
// takes in an array (or hash)of user goals
export const userGoalCount = (goals) => {
    return goals.length
}

// takes in array (or hash) of user goals
export const userGoalCountComplete = (goals) => {
    let completed = 0;
    let total = goals.length;

    for (let i = 0; i < total; i++) {
        if (goals[i].done === true) { completed += 1 }
    }

    return completed;
}

export const userGoalPercentComplete = (goals) => {
    let completed = userGoalCountComplete(goals);
    let total = goals.length

    return +(completed/total).toFixed(2) * 100;
}

export const shortestGoalCompleted = (goals) => {
    let length;
    let goalTitle;
    for (let i = 0; i < goals.length; i++) {
        if (goals[i].done === true) {
            let currLength = new Date(goals[i].finishDate).getTime() - new Date(goals[i].createDate).getTime();
            if (length === undefined) {
                length = currLength;
                goalTitle = goals[i].title
            } else if (currLength < length) {
                length = currLength;
                goalTitle = goals[i].title;
            }
         }
    }

    if (length === undefined) {
        return { length: "N/A", title: "N/A" }
    } else {
        let l = +(length / 86400000).toFixed(2);
        if (l < 1) {
            return { length: l, title: goalTitle};
        } else {
            return { length: Math.round(l), title: goalTitle}
        }
    }
}

export const longestGoalCompleted = (goals) => {
    let length;
    let goalTitle;
    for (let i = 0; i < goals.length; i++) {
        if (goals[i].done === true) {
            let currLength = new Date(goals[i].finishDate).getTime() - new Date(goals[i].createDate).getTime()
            if (length === undefined) {
                length = currLength;
                goalTitle = goals[i].title;
            } else if (currLength > length) {
                length = currLength;
                goalTitle = goals[i].title;
            }
        }
    }

    if (length === undefined) {
        return {length: "N/A", title: "N/A"}
    } else {
        let l = +(length / 86400000).toFixed(2);
        if (l < 1) {
            return { length: l, title: goalTitle };
        } else {
            return { length: Math.round(l), title: goalTitle }
        }
    }
}

export const goalStatsMulti = (goals) => {
    return ({
        longestGoal: longestGoalCompleted(goals),
        shortestGoal: shortestGoalCompleted(goals),
        goalPercent: userGoalPercentComplete(goals),
        goalCountComplete: userGoalCountComplete(goals),
        goalCount: userGoalCount(goals)
    })
}