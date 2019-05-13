const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    followers:
        [{
            type: Schema.Types.ObjectId,
            ref: 'users'
        }],
    following:
        [{
            type: Schema.Types.ObjectId,
            ref: 'users'
        }]
});

module.exports = User = mongoose.model('users', UserSchema);