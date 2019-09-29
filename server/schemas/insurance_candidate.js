const mongoose = require('mongoose');
const enums = require('../data/candidate_enums');

module.exports = new mongoose.Schema({
    age: Number,
    area: String,
    maritalStatus: {
        type: String,
        enum: enums.maritalStatus.map(status => status.value)
    },
    numOfChildren: Number,
    children: [{age: Number}],
    smoking: Boolean,
    spouse:
        {
            exists: Boolean,
            age: Number,
            smoking: Boolean,
            profession: String,
            activeIncome: Number,
            passiveIncome: Number

        },
    profession: String,
    activeIncome: Number,
    passiveIncome: Number,
    totalHouseHoldIncome: Number,
    lifeInsurance: Boolean,
    healthInsurance: Boolean,
    illnessInsurance: Boolean,
    mortgageInsurance: Boolean,
    workInsurance: Boolean
});