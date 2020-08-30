import { getCustomerRequest,getCustomerListRequest,  createCustomerRequest, 
    getFounderListRequest, createFounderRequest, deleteFounderRequest, 
    updateFounderRequest, deleteCustomerRequest, updateCustomerRequest } from "../API/CommonAPI"

export const GET_CUSTOMER = "CUSTOMER/SHOW_CUSTOMER"
export const CREATE_CUSTOMER = "CUSTOMER/CREATE"
export const FETCH_CUSTOMERS = "FOUNDER/FETCH_CUSTOMERS"
export const DELETE_CUSTOMER = "FOUNDER/DELETE_CUSTOMER"
export const UPDATE_CUSTOMER = "FOUNDER/UPDATE_CUSTOMER"

export const GET_FOUNDER = "FOUNDER/GET_FOUNDER"
export const FETCH_FOUNDERS = "FOUNDER/FETCH_FOUNDERS"
export const CREATE_FOUNDER = "FOUNDER/CREATE_FOUNDER"
export const DELETE_FOUNDER = "FOUNDER/DELETE_FOUNDER"
export const UPDATE_FOUNDER = "FOUNDER/UPDATE_FOUNDER"



// export function getFounder(founderid) {
//     return async dispatch => {
//         try {
//             getCustomerRequest(founderid)
//                 .then(response => {
//                     dispatch({type: GET_FOUNDER, payload: response.data})
//                 })
//         } catch(e) {
//             console.log(e)
//         }
//     }
// }


export function showCustomer(customerid) {
    return async dispatch => {
        try {
            getCustomerRequest(customerid)
                .then(response => {
                    dispatch({type: GET_CUSTOMER, payload: response.data})
                })
        } catch(e) {
            console.log(e)
        }
    }
}

export function createCustomer(itn, name, type, founder=[]) {

    console.log("createCustomer")
    return async dispatch => {
        try {
            createCustomerRequest(itn, name,type, founder)
                .then(response => {
                 //   const {customerId, itn, typeId, founder} = response.data
                    dispatch({type: CREATE_CUSTOMER, payload: response.data})
                })
        } catch(e) {
            console.log(e)
        }
    }
}

export function fetchCustomers(count = 0) {
    return async dispatch => {
        try {
            getCustomerListRequest(count)
                .then(response => {
                    dispatch({type: FETCH_CUSTOMERS, payload: response.data})
                })
        } catch(e) {
            console.log(e);
        }
    }
}

export function deleteCustomer(id) {
    return async dispatch => {
        try {
            deleteCustomerRequest(id)
                .then(response => {
                    console.log((DELETE_CUSTOMER))
                    console.log(id)
                    dispatch({type: DELETE_CUSTOMER, payload: id})
                })
        } catch(e) {
            console.log(e);
        }
    }
}

export function updateCustomer(customerId,itn, name, founders=[]) {
    return async dispatch => {
        try {
            
            updateCustomerRequest(customerId,itn, name, founders)
                .then(response => {
                    if(response.data.success)
                    {
                        dispatch({type: UPDATE_CUSTOMER, payload: {customerId,itn, name, founders}})
                    }
                })
        } catch(e) {
            console.log(e)
        }
    }
}



// FOUNDER ACTIONS

export function createFounder(itn, firstName, lastName, middleName) {
    return async dispatch => {
        try {
            
            createFounderRequest(itn, firstName, lastName, middleName)
                .then(response => {
                    console.log("response")
                    if(response.data.success)
                    {
                        const {founderId, itn, firstName, lastName, middleName} = response.data
                        dispatch({type: CREATE_FOUNDER, payload: {founderId, itn, firstName, lastName, middleName}})
                    }
                })
        } catch(e) {
            console.log(e)
        }
    }
}


export function getFounder(founderid) {
    return async dispatch => {
        try {
            getCustomerRequest(founderid)
                .then(response => {
                    dispatch({type: GET_FOUNDER, payload: response.data})
                })
        } catch(e) {
            console.log(e)
        }
    }
}


export function fetchFounders(count = 0) {
    return async dispatch => {
        try {
            getFounderListRequest(count)
                .then(response => {
                    dispatch({type: FETCH_FOUNDERS, payload: response.data})
                })
        } catch(e) {
            console.log(e);
        }
    }
}

export function deleteFounder(id) {
    return async dispatch => {
        try {
            deleteFounderRequest(id)
                .then(response => {
                    console.log((DELETE_FOUNDER))
                    console.log(id)
                    dispatch({type: DELETE_FOUNDER, payload: id})
                })
        } catch(e) {
            console.log(e);
        }
    }
}

export function updateFounder(founderId, itn, firstName, lastName, middleName) {
    return async dispatch => {
        try {
            
            updateFounderRequest(founderId, itn, firstName, lastName, middleName)
                .then(response => {
                    if(response.data.success)
                    {
                        console.log("updateFounder ", itn, firstName)
                        dispatch({type: UPDATE_FOUNDER, payload: {founderId, itn, firstName, lastName, middleName}})
                    }
                })
        } catch(e) {
            console.log(e)
        }
    }
}
