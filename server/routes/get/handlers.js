const dbConnectionService = require('../../db');
const {getRandomCandidate} = require('../../data/random_candidate');
const clientData = require('../../data/client_data');
const insuranceCandidateSchema = require('../../schemas/insurance_candidate');

const getAll = (req, res) => {
    dbConnectionService.getConnection()
        .then((connection) => {
            const model = connection.model('InsuranceCandidate', insuranceCandidateSchema);
            model.find((err, result) => res.json(result));
        });
};

const getRandomCandidates = (req, res) => {
    const count = req.params.count;
    const randoms = generateRandomCandidates(count);
    res.json(generateRandomCandidates(count));

};

const getChartHeaders = (req, res) => {
    res.json(clientData.CHART_HEADERS);
};

const generateRandomCandidates = (count) => {

    const result = [];

    for (let i = 0; i < count; i++) {
        const candidate = getRandomCandidate();
        result.push(candidate);
    }
    return result;
};

module.exports = {
    getAll,
    getRandomCandidates,
    getChartHeaders
};