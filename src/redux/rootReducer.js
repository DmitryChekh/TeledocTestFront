import {combineReducers} from 'redux'
import { customersReducer } from './customerReducer'
import { founderReducers } from './founderReducers'

export const rootReducer = combineReducers({
    customers : customersReducer,
    founders: founderReducers
})