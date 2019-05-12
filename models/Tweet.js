const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetSchema = new Schema ({
    text: {
        type: "String",
        required: true
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Tweet = mongoose.model('tweet', TweetSchema);