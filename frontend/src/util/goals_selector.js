export const selectUserGoals = (state, userId) => {
    let goals = Object.values(state.entities.goals)

    goals = goals.filter(goal => { return goal.user === userId } );

    return goals;
}