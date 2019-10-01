import axios from 'axios';

const VERIFY_HASH_URL = '/api/verify/';
const ATTEMPT_LOGIN_URL = '/api/login';

export const verifyHash = (hash) => {
    return axios.get(VERIFY_HASH_URL + hash);
};

export const attemptLogin = (username, password) => {
    return axios.post(ATTEMPT_LOGIN_URL, {username, password});
};