const dbConnectionService = require('../../db');
const insuranceCandidateSchema = require('../../schemas/insurance_candidate');

const saveCandidates = (req, res) => {
    const candidates = req.body;

    dbConnectionService.getConnection()
        .then((connection) => {
            const model = connection.model('InsuranceCandidate', insuranceCandidateSchema);
            model.insertMany(candidates, err => {
                if (err) {
                    res.json({error: err.message});
                }
                else {
                    res.json({error: null});
                }
            });
        });
};

module.exports = {
    saveCandidates
};