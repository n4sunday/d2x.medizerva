import { combineReducers } from 'redux'
import apiReducer from './apiReducer'
import mainStore from './mainStore'
import historyReducer from './historyReducer'


const rootReducer = combineReducers({
    api: apiReducer,
    main: mainStore,
    history: historyReducer,
})

export default rootReducer

