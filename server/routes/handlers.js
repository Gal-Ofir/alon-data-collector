const insuranceCandidateService = require('../db');
const insuranceCandidateSchema = require('../schemas/insurance_candidate');

const getAll = (req, res) => {
    insuranceCandidateService.getConnection()
        .then((connection) => {
            const model = connection.model('InsuranceCandidate', insuranceCandidateSchema);
            model.find((err, result) => res.json(result));
        });
};

const getRandomCandidates = (req, res) => {
    const count = req.params.count;
    const randoms = generateRandomCandidates(count);
    console.log(randoms);
    res.json(generateRandomCandidates(count));

};

const generateRandomCandidates = (count) => {

    const result = [];

    for (let i = 0; i < count; i++) {

        const candidate = {
            age: Number,
            cityOfResidence: "Tel aviv",
            maritalStatus: "Married",

            numOfChildren: 2,
            children: [{age: 18}, {age: 5}],
            smoking: false,
            spouse:
                {
                    exists: true,
                    age: 50,
                    cityOfResidence: "Tel aviv",
                    smoking: false,
                    profession: "Teacher",
                    activeIncome: 7200,
                    passiveIncome: 0

                },
            profession: "Construction Worker",
            activeIncome: 11000,
            passiveIncome: 2000,
            totalHouseHoldIncome: 20200
        };
        result.push(candidate);
    }
    return result;
};

module.exports = {
    getAll,
    getRandomCandidates
};