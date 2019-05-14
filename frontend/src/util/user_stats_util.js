
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
    for (let i = 0; i < total; i++) {
        if (goals[i].done === true) {
            let currLength = goals[i].finishDate - goals[i].createDate
            if (length === undefined) {
                length = currLength
            } else if (currLength < length) {
                length = currLength;
            }
         }
    }

    if (length === undefined) {
        return "N/A"
    } else {
        return length;
    }
}

export const longestestGoalCompleted = (goals) => {
    let length;
    for (let i = 0; i < total; i++) {
        if (goals[i].done === true) {
            let currLength = goals[i].finishDate - goals[i].createDate
            if (length === undefined) {
                length = currLength
            } else if (currLength > length) {
                length = currLength;
            }
        }
    }

    if (length === undefined) {
        return "N/A"
    } else {
        return length;
    }
}