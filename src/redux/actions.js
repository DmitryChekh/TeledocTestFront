import { getCustomerRequest, createCustomerRequest, getFounderListRequest, createFounderRequest, deleteFounderRequest } from "../API/CommonAPI"

export const GET_CUSTOMER = "CUSTOMER/SHOW_CUSTOMER"
export const CREATE_CUSTOMER = "CUSTOMER/CREATE"


export const GET_FOUNDER = "FOUNDER/SHOW_CUSTOMER"
export const FETCH_FOUNDERS = "FOUNDER/FETCH_FOUNDERS"
export const CREATE_FOUNDER = "FOUNDER/CREATE_FOUNDER"
export const DELETE_FOUNDER = "FOUNDER/DELETE_FOUNDER"


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

export function createCustomer(itn, name) {
    return async dispatch => {
        try {
            createCustomerRequest(itn, name)
                .then(response => {
                    dispatch({type: CREATE_CUSTOMER, payload: response.data})
                })
        } catch(e) {
            console.log(e)
        }
    }
}

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
