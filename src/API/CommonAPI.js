import * as axios from "axios"

export const getCustomerRequest = (customerid) => {
    return axios.post('https://localhost:44327/api/customer/get', {
        headers: {
            "accept": '*/*',
            "Content-Type": "application/json",
        },
        customerid
    });
};

export const createCustomerRequest = (itn, name) => {
    return axios.post('https://localhost:44327/api/customer/create', {
        headers: {
            "accept": '*/*',
            "Content-Type": "application/json",
        },
        itn,
        name
    });
};

export const getFounderListRequest = (count = 0) => {
    return axios.post(`https://localhost:44327/api/founder/get/list=${count}`, {
        headers: {
            "accept": '*/*',
        }
    });
};


export const createFounderRequest = (itn, firstname, lastname, middlename) => {
    let data = JSON.stringify({firstname,lastname, middlename,itn})
    return axios.post('https://localhost:44327/api/founder/create',  data, {
            headers: {
                "accept": '*/*',
                "Content-Type": "application/json",
            },

        });
};

export const deleteFounderRequest = (founderid) => {
    return axios.post('https://localhost:44327/api/founder/delete',  {
            headers: {
                "accept": '*/*',
                "Content-Type": "application/json",
            },
            founderid
        });
};


