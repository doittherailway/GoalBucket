const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys'); 
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get('/', (req, res) => {
    User.find().select('-password -date -__v')
        .then(users => res.json(users))
        .catch(err =>
            res.status(404).json({ nousersfound: 'No users found' })
        );
});

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Check to make sure nobody has already registered with a duplicate email
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                // Throw a 400 error if the email address already exists
                errors.email = 'Email already exists';
                return res.status(400).json(errors);
            } else {
                // Otherwise create a new user
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
});

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                errors.email = 'User not found';
                return res.status(404).json(errors);
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = { id: user.id, name: user.name };

                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            // Tell the key to expire in 6 hours
                            { expiresIn: 21600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                            });
                    } else {
                        return res.status(400).json({ password: 'Incorrect password' });
                    }
                });
        });
});

// You may want to start commenting in information about your routes so that you can find the appropriate ones quickly.

router.get('/current', 
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
    res.json({
        id: req.user.id,
        handle: req.user.handle,
        email: req.user.email
    });
});

router.patch('/follow/:user_id', 
    passport.authenticate('jwt', {session: false}),
    (req, res) => {

        User.findById(req.user.id)
            .then( currUser => {

                if (!currUser.following.includes(req.params.user_id)) {
                    currUser.following.push(req.params.user_id); 
                }
                let data = []; 

                User.findById(req.params.user_id)
                    .then( followedUser => {
                        if (!followedUser.followers.includes(req.user.id)) {
                            followedUser.followers.push(req.user.id);
                        }
                        followedUser.save()
                            .then(updatedfollowing => data.push(updatedfollowing))
                            .catch(err => res.status(422).json(err)); 
                    })
                    .then(() => {
                        return currUser.save()
                            .then(updatedfollower => {
                                data.push(updatedfollower);
                                let dataIndex = {}; 

                                for (let i = 0; i < data.length; i++) {
                                    dataIndex[data[i].id] = data[i]; 
                                }
                                return res.json(dataIndex); 
                                })
                            .catch(err => res.status(422).json(err));  });   
            });     
    }
);

router.delete('/follow/:user_id',
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        // need work here. 
    } 
);

module.exports = router;