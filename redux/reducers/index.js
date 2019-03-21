import { combineReducers } from 'redux'
import numberReducer from './numberReducer'
import editName from './editName'
import apiReducer from './apiReducer'
import mainStore from './mainStore'


const rootReducer = combineReducers({
    api: apiReducer,
    number: numberReducer,
    sunday: editName,
    main: mainStore,
})

export default rootReducer

