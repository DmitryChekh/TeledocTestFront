
import { GET_FOUNDER, CREATE_FOUNDER, FETCH_FOUNDERS, DELETE_FOUNDER } from "./actions"

const initialState = {
    founders: []
}

export const founderReducers = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_FOUNDER:
            return { ...state, founders: state.founders.concat([action.payload]) }
        case FETCH_FOUNDERS:
            return { ...state, founders: action.payload.data }
        case DELETE_FOUNDER:
            console.log(action.payload)
            return { ...state, founders: state.founders.filter(item => item.founderId !== action.payload) }
        default: return state
    }
}