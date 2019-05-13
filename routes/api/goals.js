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
        .then(goals => res.json(goals))
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
        debugger; 
        const { errors, isValid } = validateGoalInput(req.body);

        if (!isValid) {
            return res.status(418).json(errors);
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
        .then(goal => res.json(goal));
    }
)

module.exports = router;