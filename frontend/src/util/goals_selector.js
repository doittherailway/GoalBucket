export const selectUserGoals = (state, userId) => {
    let goals = Object.values(state.entities.goals)

    goals = goals.filter(goal => { return goal.user === userId } );

    return goals;
}

export const sortByCreateDate = goals => {
    return goals.sort((a,b) => {
        let date1 = new Date(a.createDate);
        let date2 = new Date(b.createDate);
        return date2.getTime() - date1.getTime();
    })
}