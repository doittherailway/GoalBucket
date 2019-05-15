
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

    return +(completed/total).toFixed(2);
}

export const shortestGoalCompleted = (goals) => {
    let length;
    let goalTitle;
    for (let i = 0; i < goals.length; i++) {
        if (goals[i].done === true) {
            let currLength = goals[i].finishDate - goals[i].createDate
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
        return "N/A"
    } else {
        return {length: length, title: goalTitle};
    }
}

export const longestGoalCompleted = (goals) => {
    let length;
    let goalTitle;
    for (let i = 0; i < goals.length; i++) {
        if (goals[i].done === true) {
            let currLength = goals[i].finishDate - goals[i].createDate
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
        return "N/A"
    } else {
        return { length: length, title: goalTitle };
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