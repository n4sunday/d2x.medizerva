import { combineReducers } from 'redux'
import apiReducer from './apiReducer'
import mainStore from './mainStore'
import historyReducer from './historyReducer'
import diseaseReducer from './diseaseReducer'
import chatboxReducer from './chatboxReducer'


const rootReducer = combineReducers({
    api: apiReducer,
    main: mainStore,
    history: historyReducer,
    disease:diseaseReducer,
    chatbox:chatboxReducer,
})

export default rootReducer

