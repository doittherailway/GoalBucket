const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function ValidateGoalInput(data) {
    let errors = {};

    // Goal title validation
    data.title = validText(data.title) ? data.title : "";

    if (!Validator.isLength(data.title, {min: 5, max: 40})) {
        errors.title = 'Goal title must be between 5 and 40 characters';
    }

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Goal title is required';
    }


    // Goal description validation
    data.description = validText(data.description) ? data.description : "";

    if (!Validator.isLength(data.description, { min: 5, max: 140 })) {
        errors.description = 'Goal description must be between 5 and 140 characters';
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = 'Goal description is required';
    }


    // Goal goalAmount validation
    if (!Validator.isInt(String(data.goalAmount))) {
        errors.goalAmount = 'Goal amount has to be a number';
    }

    if ( data.goalAmount < 1) {
        errors.goalAmount = "Goal amount should probably greater than zero"; 
    }


    // Goal goalType validation
    data.goalType = validText(data.goalType) ? data.goalType : "";

    if (!Validator.isLength(data.goalType, { min: 5, max: 40 })) {
        errors.goalType = 'Goal type must be between 5 and 40 characters';
    }

    if (Validator.isEmpty(data.goalType)) {
        errors.goalType = 'Goal type is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };

};