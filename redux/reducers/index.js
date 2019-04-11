import { combineReducers } from 'redux'
import apiReducer from './apiReducer'
import mainStore from './mainStore'
import historyReducer from './historyReducer'
import diseaseReducer from './diseaseReducer'


const rootReducer = combineReducers({
    api: apiReducer,
    main: mainStore,
    history: historyReducer,
    disease:diseaseReducer,
})

export default rootReducer

