# Goal Bucket

[GoalBucket Live Site](https://goalbucket.herokuapp.com)

## Background and Overview
 Goal Bucket is a goal setting and accountability social webapp that allows users to set goals, make progress on their goals, and cheer on their friends' goals. Users can also show off their trophy case of achieved goals.

## Team Members
* [Priya Balasubramanian](https://github.com/pbalasubramanian)
* [Keyang Sun](https://github.com/keyangsun)
* [Jay Swanson](https://github.com/jrswanson)
* [Sandi Rail](https://github.com/doittherailway)

## Functionality and MVP

* User Auth/Account creation
  * Users can create an account, login and logout.

* Goals CRUD
  * Users can create/edit/delete goals, set a description and units/timeline.
  * Users can see a feed of their goals

* Friends/Cheers
  * Users can cheer on each others goals.

* Goals Stats
  * Users have a visualisation for different stats about their goals (eg. number of goals, average completion rating, fastest completed etc).
  * Users have a trophy case of their completed goals.


## Technologies and Technical Challenges

Backend
* MongoDB
* Express
* Node.js

Frontend
* React
* Redux
* Javascript

Technical Challenges:
* Learning MERN stack


## Feature Highlights

### Goal completion UI
![alt text](https://github.com/doittherailway/GoalBucket/blob/master/images/profile-page.gif "Goal completion UI")
* As the user completes steps towards their goal, the progress bar can be incremented via a button to show the updated progress. Upon completion, the goal is marked as 'Complete' and counts towards the user stats. When a goal is incremented via the UI, the update goal route runs checks to see if the goal is now completed, and if so, changes the status to done in the database, which triggers an update on the front end visually. This UI change was implemented using React components, subscribing various parts of the user profile and goal to the appropriate slice of Redux state.


```javascript
showUpdate() {
        if(this.props.goal.user === this.props.currentUser.id ) {
            return (
                <span className="cheer-span">
                    <button className="plus-button" onClick={(e) => { this.updateGoalAmount(e) }}>+</button>
                    <span>update</span>
                </span>
            );
        } else {
            // show cheers
            return (
                <span className="cheer-span">
                    <i className="fas fa-child" ref="cheer" onClick={(e) => { this.addCheer() }}></i>
                    <span>{this.props.goal.cheers.length} cheers</span>
                </span>
            );
        }
    }
```

* The above code snippet demonstrates a portion of each goal index item's conditional rendering; if the goal belongs to the current user, it can be updated/incremented, however if it belongs to someone else, the option to 'cheer' is instead presented. 

### Hamburger menu aside UI
![alt text](https://raw.githubusercontent.com/doittherailway/GoalBucket/master/images/aside.gif "Hamburger menu aside UI")
* When a user clicks on the hamburger icon (three horizontal bars), the side menu expands/collapses. This was implemented using Redux state and an onClick event listener to update the state and change the UI accordingly. The following code snippet captures the class toggling and the conditional rendering of components based on what is selected, and updates according to the selection made.

```javascript
<div className='main-page'>
    <div>
        <AsideContainer switchPane={this.switchPane} selected={this.state.selected} />
        <div className='main-page-right' id={this.props.aside ? '' : 'aside-overlay'}>
            {this.state.selected === 'goals' ? <GoalsContainer /> : ''}
            {this.state.selected === 'profile' ? <ProfileContainer /> : ''}
            {this.state.selected === 'create' ? <CreateGoalFormContainer switchPane={this.switchPane} /> : ''}
        </div>
    </div>
</div>
```

### Future Features

* Users can follow and be followed by other users

* Users can see a feed of their friends goals

* Host Pictures

* Comments

* Search Goal tags/categories
 
### Screenshots
![alt text](https://raw.githubusercontent.com/doittherailway/GoalBucket/master/images/Splash_live.png "Splash")
![alt text](https://raw.githubusercontent.com/doittherailway/GoalBucket/master/images/Feed_live.png "Feed")
![alt text](https://raw.githubusercontent.com/doittherailway/GoalBucket/master/images/Profile_live.png "Profile")
