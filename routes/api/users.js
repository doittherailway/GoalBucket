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
        .then(users => {
            let usersIndex = {};

            for(let i = 0; i < users.length; i++) {
                usersIndex[users[i].id] = users[i];
            }

            res.json(usersIndex);
        })
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
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        let promise1 = User.findById(req.user.id).exec(); 

        promise1 = promise1.then(
            currUser => {
                if (!currUser.following.includes(req.params.user_id)) {
                currUser.following.push(req.params.user_id);
                }

                return currUser.save()
                    .then( updatedCurrUser => updatedCurrUser );
            }
        );

        let promise2 = User.findById(req.params.user_id).exec();

        promise2 = promise2.then(
            followedUser => {
                if (!followedUser.followers.includes(req.user.id)) {
                    followedUser.followers.push(req.user.id);
                }

                return followedUser.save()
                    .then( updatedfollowedUser => updatedfollowedUser); 
            }
        );

        return Promise.all([promise1, promise2])
            .then( val => {
                let data = {};
                for (let i = 0; i < val.length; i++) {
                    data[val[i].id] = val[i];
                }
                return res.json(data); 
            });
    }   
);

router.delete('/follow/:user_id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        let promise1 = User.findById(req.user.id).exec();

        promise1 = promise1.then(
            currUser => {
                currUser.following = currUser.following.filter(val =>
                    (String(val) !== String(req.params.user_id)));

                return currUser.save()
                    .then(updatedCurrUser => updatedCurrUser);
            }
        );

        let promise2 = User.findById(req.params.user_id).exec();

        promise2 = promise2.then(
            followedUser => {
                followedUser.followers = followedUser.followers.filter( val =>
                    (String(val) !== String(req.user.id)));

                return followedUser.save()
                    .then(updatedfollowedUser => updatedfollowedUser);
            }
        );

        return Promise.all([promise1, promise2])
            .then(val => {
                let data = {};
                for (let i = 0; i < val.length; i++) {
                    data[val[i].id] = val[i];
                }
                return res.json(data);
            });
    }
);

module.exports = router;