# Goal Bucket

[GoalBucket Live Site](https://goalbucket.herokuapp.com)

## Background and Overview
 Goal Bucket is a goal setting and accountability social webapp that allows users to set goals, make progress on their goals, and cheer on their friends goals. Users can also show off their trophy case of achieved goals.

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

### Hamburger menu aside UI
![alt text](https://raw.githubusercontent.com/doittherailway/GoalBucket/master/images/aside.gif "Hamburger menu aside UI")
* When a user clicks on the hamburger icon (three horizontal bars), the side menu expands/collapses. This was implemented using Redux state and an onClick event listener to update the state and change the UI accordingly.



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
