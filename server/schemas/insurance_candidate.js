const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    age: Number,
    cityOfResidence: String,
    maritalStatus: {
        type: String,
        enum: ["Single", "Married", "Divorced"]
    },
    numOfChildren: Number,
    children: [{age: Number}],
    smoking: Boolean,
    spouse:
        {
            exists: Boolean,
            age: Number,
            cityOfResidence: String,
            smoking: Boolean,
            profession: String,
            activeIncome: Number,
            passiveIncome: Number

        },
    profession: String,
    activeIncome: Number,
    passiveIncome: Number,
    totalHouseHoldIncome: Number
});