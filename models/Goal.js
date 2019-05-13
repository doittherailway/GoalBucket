const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    title: {
        type: "String",
        required: true
    },

    description: {
        type: "String",
        required: true
    },

    createDate: {
        type: Date,
        default: Date.now
    },

    updateDate: {
        type: Date,
    },

    finishDate: {
        type: Date
    },

    endDate: {
        type: Date
    },

    goalAmount: {
        type: Number,
        required: true
    },

    goalType: {
        type: String,
        required: true
    },

    done: {
        type: Boolean,
        default: false
    },

    timed: {
        type: Boolean,
        default: false
    },

    cheers: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }]
});

module.exports = Goal = mongoose.model('goals', GoalSchema);