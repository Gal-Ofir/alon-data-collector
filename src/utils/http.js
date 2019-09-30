import axios from 'axios';

// get
const GET_ALL_CANDIDATES_URL = '/api/all';
const GET_RANDOM_CANDIDATES_URL = '/api/random/';
const GET_CHART_HEADERS_URL = '/api/chart';

// post
const POST_SAVE_CANDIDATES_URL = 'api/save';

export const getAllCandidates = () => {
  return axios.get(GET_ALL_CANDIDATES_URL);
};

export const getRandomCandidates = (candidatesCount) => {
    return axios.get(GET_RANDOM_CANDIDATES_URL + candidatesCount);
};

export const getChartHeaders = () => {
    return axios.get(GET_CHART_HEADERS_URL);
};

export const saveCandidates = (candidates) => {
    return axios.post(POST_SAVE_CANDIDATES_URL, candidates);
};