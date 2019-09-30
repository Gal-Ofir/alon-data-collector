const dbConnectionService = require('../../db');
const insuranceCandidateSchema = require('../../schemas/insurance_candidate');

const saveCandidates = (req, res) => {
    let candidates = req.body;

    dbConnectionService.getConnection()
        .then((connection) => {
            const model = connection.model('InsuranceCandidate', insuranceCandidateSchema);
            candidates = candidates.map(candidate => {
                const newCandidate = {};
                newCandidate.spouse = {};
                Object.keys(candidate).map(key => {
                    if (candidate[key].hasOwnProperty('value')) {
                        newCandidate[key] = candidate[key].value;
                    } else if (key === 'spouse') {
                        Object.keys(candidate[key]).forEach(spouseKey => {
                            newCandidate[key][spouseKey] = candidate[key][spouseKey].hasOwnProperty('value') ? candidate[key][spouseKey].value : candidate[key][spouseKey];
                        })
                    } else {
                        newCandidate[key] = candidate[key];
                    }
                });
                return newCandidate;
            });
            model.insertMany(candidates, err => {
                if (err) {
                    res.json({error: err.message});
                } else {
                    res.json({error: null});
                }
            });
        });
};

module.exports = {
    saveCandidates
};