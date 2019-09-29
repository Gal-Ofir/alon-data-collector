const AREAS = {
    DAN: "DAN",
    JERUSALEM: "JRS",
    NORTH: "NORTH",
    SOUTH: "SOUTH",
    SHARON: "SHARON",
    SHFELA: "SHFELA"
};

const PROFESSIONS = {
    TEACHER: "TEACHER",
    PHYSICIAN: "PHYSICIAN",
    ENGINEER: "ENGINEER",
    LAWYER: "LAWYER",
    ACCOUNTANT: "ACCOUNTANT",
    LIBRARIAN: "LIBRARIAN",
    TECHNICIAN: "TECHNICIAN",
    ARCHITECT: "ARCHITECT",
    ELECTRICIAN: "ELECTRICIAN",
    FIREFIGHTER: "FIRE FIGHTER",
    MECHANIC: "MECHANIC",
    WAITER: "WAITER",
    CHEF: "CHEF",
    AVIATOR: "AVIATOR",
    SECRETARY: "SECRETARY",
    VETERINARIAN: "VETERINARIAN",
    JUDGE: "JUDGE",
    HAIRDRESSER: "HAIRDRESSER",
    PLUMBER: "PLUMBER",
    BUTCHER: "BUTCHER",
    POLICE: "POLICE",
    SURGEON: "SURGEON",
    DIETITIAN: "DIETITIAN",
    SCIENTIST: "SCIENTIST",
    SURVEYOR: "SURVEYOR",
    TAILOR: "TAILOR",
    PSYCHOLOGIST: "PSYCHOLOGIST",
    MAIL: "MAIL",
    DENTIST: "DENTIST",
    ACTUARY: "ACTUARY",
    PHYSIOTHERAPIST: "PHYSIOTHERAPIST",
    RADIOGRAPHER: "RADIOGRAPHER",
    FLIGHTATTENDANT: "FLIGHT ATTENDANT",
    LABOURER: "LABOURER",
    PHARMACIST: "PHARMACIST",
    BARTENDER: "BARTENDER",
    LIFEGUARD: "LIFEGUARD",
    CASHIER: "CASHIER",
    PARAMEDIC: "PARAMEDIC",
    TRUCKDRIVER: "TRUCK DRIVER",
    DESIGNER: "DESIGNER"

};

const ADULT_AGE = {min: 21, max: 60};

const CHILDREN_AGE = {min: 0, max: 21};

const CHILDREN_COUNT = {min: 0, max: 6};

const ACTIVE_INCOME = {min: 5000, max: 40000};

const PASSIVE_INCOME = {min: 0, max: 5000};

const MARITAL_STATUS = {
    SINGLE: "SINGLE",
    MARRIED: "MARRIED",
    DIVORCED: "DIVORCED",
    WIDOWER: "WIDOWER"
};

module.exports = {
    areas: [
        {
            value: AREAS.DAN,
            text: "גוש דן והסביבה",
        },
        {
            value: AREAS.JERUSALEM,
            text: "אזור ירושלים"
        },
        {
            value: AREAS.NORTH,
            text: "צפון הארץ"
        },
        {
            value: AREAS.SOUTH,
            text: "דרום הארץ"
        },
        {
            value: AREAS.SHARON,
            text: "השרון"
        },
        {
            value: AREAS.SHFELA,
            text: "השפלה"
        }
    ],
    professions: Object.keys(PROFESSIONS).map(key => {
        return {value: PROFESSIONS[key], text: PROFESSIONS[key].toLowerCase()}
    }),
    maritalStatus: [
        {
            value: MARITAL_STATUS.SINGLE,
            text: "רווק"
        },
        {
            value: MARITAL_STATUS.MARRIED,
            text: "נשוי"
        },
        {
            value: MARITAL_STATUS.DIVORCED,
            text: "גרוש"
        },
        {
            value: MARITAL_STATUS.WIDOWER,
            text: "אלמן"
        }
    ],
    adultAges: ADULT_AGE,
    childrenCount: CHILDREN_COUNT,
    childrenAges: CHILDREN_AGE,
    activeIncome: ACTIVE_INCOME,
    passiveIncome: PASSIVE_INCOME,
    MARITAL_STATUS,
    AREAS, CHILDREN_COUNT,
    PASSIVE_INCOME,
    ACTIVE_INCOME,
    ADULT_AGE,
    PROFESSIONS,
    CHILDREN_AGE,
};

