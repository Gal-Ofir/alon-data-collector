import axios from 'axios';

const GET_ALL_CANDIDATES_URL = '/api/all';
const GET_RANDOM_CANDIDATES_URL = '/api/random/';
const GET_CHART_HEADERS_URL = '/api/chart';

export const getAllCandidates = () => {
  return axios.get(GET_ALL_CANDIDATES_URL);
};

export const getRandomCandidates = (candidatesCount) => {
    return axios.get(GET_RANDOM_CANDIDATES_URL + candidatesCount);
};

export const getChartHeaders = () => {
    return axios.get(GET_CHART_HEADERS_URL);
};