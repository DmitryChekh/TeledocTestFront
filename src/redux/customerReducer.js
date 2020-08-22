import { GET_CUSTOMER } from "./actions"


const initialState = {
    customers: []
}

export const customersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CUSTOMER:
            return {...state, customers: action.payload}
        default: return state
    }
}