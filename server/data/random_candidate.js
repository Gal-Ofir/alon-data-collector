const enums = require('./candidate_enums');

const getRandomProfession = () => {
    const i = Math.floor(Math.random() * enums.professions.length);
    return enums.professions[i];
};

const getRandomArea = () => {
    const i = Math.floor(Math.random() * enums.areas.length);
    return enums.areas[i];
};

const getRandomMaritalStatus = () => {
    const r = Math.floor(Math.random() * 20);
    let i = 0;
    switch (r) {
        case 0:
            i = 0;
            break;
        case 1:
            i = 2;
            break;
        case 2:
            i = 3;
            break;
        default:
            i = 1;
    }
    return enums.maritalStatus[i];
};

const getRandomSmoking = () => {
    return Math.random() > 0.5;
};

const getRandomChildrenCount = () => {
    return Math.max(enums.childrenAges.min, Math.floor(Math.random() * enums.childrenCount.max));
};

const getRandomActiveIncome = () => {
    const income = Math.max(enums.activeIncome.min, Math.floor(Math.random() * enums.activeIncome.max));
    return Math.round(income / 1000) * 1000;
};

const getRandomPassiveIncome = () => {
    const income = Math.max(enums.passiveIncome.min, Math.floor(Math.random() * enums.passiveIncome.max));
    return Math.round(income / 1000) * 1000;
};

const getRandomAge = () => {
    return enums.adultAges.min + Math.floor(Math.random() * (enums.adultAges.max - enums.adultAges.min));

};

const getRandomSpouse = (ageOfCandidate, exists) => {
    if (!exists) {
        return {exists};
    }
    const delta = Math.floor(Math.random() * 5) * (Math.random() > 0.5 ? 1 : -1);
    return {
        exists,
        age: Math.max(21, ageOfCandidate + delta),
        smoking: getRandomSmoking(),
        profession: getRandomProfession(),
        activeIncome: getRandomActiveIncome(),
        passiveIncome: getRandomPassiveIncome()
    };
};

const getRandomChildren = (count) => {
    const children = [];
    for (let i = 0; i < count; i++) {
        const child = {
            age: enums.childrenAges.min + Math.floor(Math.random() * (enums.childrenAges.max - enums.childrenAges.min))
        };
        children.push(child);
    }
    return children;
};

const getRandomCandidate = () => {
    const age = getRandomAge();
    const area = getRandomArea();
    const maritalStatus = getRandomMaritalStatus();
    const numOfChildren = getRandomChildrenCount();
    const profession = getRandomProfession();
    const smoking = getRandomSmoking();
    const spouse =  getRandomSpouse(age, maritalStatus.value === enums.MARITAL_STATUS.MARRIED);
    const activeIncome = getRandomActiveIncome();
    const passiveIncome = getRandomPassiveIncome();
    const totalHouseHoldIncome = activeIncome + passiveIncome + (spouse.exists ? spouse.passiveIncome + spouse.activeIncome : 0);
    const children = getRandomChildren(numOfChildren);
    const lifeInsurance = false;
    const healthInsurance = false;
    const illnessInsurance = false;
    const mortgageInsurance = false;
    const workInsurance = false;
    return {
        age,
        area,
        maritalStatus,
        numOfChildren,
        children,
        smoking,
        profession,
        spouse,
        activeIncome,
        passiveIncome,
        totalHouseHoldIncome,
        lifeInsurance,
        healthInsurance,
        illnessInsurance,
        mortgageInsurance,
        workInsurance
    }
};

module.exports = {
    getRandomCandidate
};