import axios from "axios";

const BASE_URL = "https://mock-api.driven.com.br/api/v4/driven-plus"

function postLoginRequest(infos){
    return axios.post(`${BASE_URL}auth/login`, infos)
}

function postSingUpRequest(infos){
    return axios.post(`${BASE_URL}/auth/sign-up`, infos)
}

function getSubscriptionData(pass){
    return axios.get(`${BASE_URL}/subscriptions/memberships`, pass)
}

export {
    postLoginRequest,
    postSingUpRequest,
    getSubscriptionData,
}