const express = require("express");
const router = express.Router();

// router.get("/test", (req, res) => res.json({ msg: "This is the goals route" }));
const mongoose = require('mongoose');
const passport = require('passport');

const Goal = require('../../models/Goal');
const validateGoalInput = require('../../validation/goals');

// goals index req
router.get('/', (req, res) => {
    Goal.find()
        .then(goals => {
            let goalsIndex = {}; 
            for (let i = 0; i < goals.length; i ++) {
                goalsIndex[goals[i].id] = goals[i]; 
            }
            res.json(goalsIndex);
        })
        .catch(err => 
            res.status(404).json({ nogoalsfound: 'No goals found' })
        );
});

// user signin req
router.get('/user/:user_id', (req, res) => {
    Goal.find({ user: req.params.user_id })
        .then(goals => res.json(goals))
        .catch(err =>
            res.status(404).json({ nogoalsfound: 'No goals for that user' })
        );
});

// goal show req
router.get('/:id', (req, res) => {
    Goal.find({id: req.params.id})
    .then(goal => res.json(goal))
    .catch(err => 
        res.status(404).json({ nogoalfound: "No goal found"})
    );
});

// goal create req
router.post('/', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        const { errors, isValid } = validateGoalInput(req.body);

        if (!isValid) {
            return res.status(422).json(errors);
        }

        const newGoal = new Goal({
            title: req.body.title,
            description: req.body.description,
            updateDate: req.body.updateDate,
            finishDate: req.body.finishDate,
            goalAmount: req.body.goalAmount,
            goalType: req.body.goalType,
            endDate: req.body.endDate,
            done: req.body.done,
            timed: req.body.timed,
            user: req.user.id,
        });

        newGoal.save()
        .then(goal => res.json(goal))
        .catch(err => res.status(400).json(err));
    }
);

// goal update req
router.patch('/:id',
    (req, res) => {
        Goal.findById(req.params.id)
            .then(goal => {

                let { title, description, goalCurrentAmount, goalAmount, done } = req.body;
                
                if (title) {
                    goal.title = title;
                }
                if (description) {
                    goal.description = description;
                }
                if (goalCurrentAmount <= goalAmount) {
                    goal.goalCurrentAmount = goalCurrentAmount;
                }
                if (goalCurrentAmount === goalAmount) {
                    goal.done = true;
                    goal.finishDate = Date.now();
                }
                goal.updateDate = Date.now();
                goal.save()
                    .then(updatedGoal => res.json(updatedGoal))
                    .catch(err => res.status(418).json(err));
            }
            );
    }
);

// add cheer to goal
router.patch('/cheers',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        Goal.findById(req.body.goalId)
            .then(
                goal => {
                    let cheers = goal.cheers;

                    if (!cheers.includes(req.user.id)) {
                        cheers.push(req.user.id);
                    }

                    goal.cheers = cheers;

                    goal.save()
                        .then(updateGoal => res.json(updateGoal))
                        .catch(err => res.status(400).json(err));
        });
    }
);

// remove cheer from goal
router.delete('/cheers',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        console.log(req.body);
        Goal.findById(req.body.goalId)
            .then(
                goal => {
                    let cheers = goal.cheers.filter(el => {
                        return el.toString() !== req.user.id;
                    });

                    goal.cheers = cheers;

                    goal.save()
                        .then(updateGoal => res.json(updateGoal))
                        .catch(err => res.status(400).json(err));
                });
    }
);

module.exports = router;