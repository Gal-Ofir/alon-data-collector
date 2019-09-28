const schema = require('../schemas/insurance_candidate');
const mongoose = require('mongoose');

module.exports = mongoose.model('InsuranceCandidate', schema);
