import { GET_CUSTOMER, FETCH_CUSTOMERS, CREATE_CUSTOMER, DELETE_CUSTOMER, UPDATE_CUSTOMER } from "./actions"


const initialState = {
    customers: []
}

export const customersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CUSTOMER:
            return { ...state, customers: state.customers.concat([action.payload]) }
        case FETCH_CUSTOMERS:
            return { ...state, customers: action.payload.data }
        case DELETE_CUSTOMER:
            return { ...state, customers: state.customers.filter(item => item.customerId !== action.payload) }
        case UPDATE_CUSTOMER:
            console.log(action.payload)
            return {
                ...state, customers: state.customers.map(item => {
                    console.log(item.customerId)
                    if (item.customerId == action.payload.customerId) {
                        return action.payload
                    }
                    return item;
                })
            }
        default: return state

    }
}