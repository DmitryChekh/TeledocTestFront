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

export const createCustomerRequest = (itn, name, typeId, foundersId=[]) => {
    let data = JSON.stringify({itn, name,typeId, foundersId})

    return axios.post('https://localhost:44327/api/customer/create',data, {
        headers: {
            "accept": '*/*',
            "Content-Type": "application/json",
        }
    });
};


export const getCustomerListRequest = (count = 0) => {
    return axios.post(`https://localhost:44327/api/customer/get/list=${count}`, {
        headers: {
            "accept": '*/*',
        }
    });
};

export const deleteCustomerRequest = (customerid) => {
    return axios.post('https://localhost:44327/api/customer/delete',  {
            headers: {
                "accept": '*/*',
                "Content-Type": "application/json",
            },
            customerid
        });
};

export const updateCustomerRequest = (customerId,itn, name, founders=[]) => {
    let data = JSON.stringify({customerId,itn, name, founders})
    return axios.post('https://localhost:44327/api/customer/update',  data, {
            headers: {
                "accept": '*/*',
                "Content-Type": "application/json",
            },

        });
};



// FOUNDER REQUEST ///////////////////////

export const getFounderRequest = (founderid) => {
    return axios.post('https://localhost:44327/api/founder/get', {
        headers: {
            "accept": '*/*',
            "Content-Type": "application/json",
        },
        founderid
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


export const updateFounderRequest = (founderid, itn, firstname, lastname, middlename) => {
    let data = JSON.stringify({founderid, firstname,lastname, middlename,itn})
    return axios.post('https://localhost:44327/api/founder/update',  data, {
            headers: {
                "accept": '*/*',
                "Content-Type": "application/json",
            },

        });
};
