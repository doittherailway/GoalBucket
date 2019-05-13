const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function ValidateGoalInput(data) {
    let errors = {};

    // Goal title validation
    data.title = validText(data.title) ? data.title : "";

    if (!Validator.isLength(data.title, {min: 5, max: 40})) {
        errors.text = 'Goal title must be between 5 and 40 characters';
    }

    if (Validator.isEmpty(data.title)) {
        errors.text = 'Goal title is required';
    }


    // Goal description validation
    data.description = validText(data.description) ? data.description : "";

    if (!Validator.isLength(data.description, { min: 5, max: 140 })) {
        errors.text = 'Goal description must be between 5 and 140 characters';
    }

    if (Validator.isEmpty(data.description)) {
        errors.text = 'Goal description is required';
    }


    // Goal goalAmount validation
    if (!Validator.isInt(data.goalAmount)) {
        errors.text = 'Goal goalAmount has to be a number';
    }


    // Goal goalType validation
    data.goalType = validText(data.goalType) ? data.goalType : "";

    if (!Validator.isLength(data.goalType, { min: 5, max: 40 })) {
        errors.text = 'Goal goalType must be between 5 and 40 characters';
    }

    if (Validator.isEmpty(data.goalType)) {
        errors.text = 'Goal goalType is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };

};