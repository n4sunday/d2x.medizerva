import axios from 'axios'
//-------------------------API-Server----------------------------
//const apiurl = 'https://d2xapi.medizerva.com/'
const apiurl = 'https://d2xapi.medizerva.com/api'
export const getAPI = () => async (dispatch) => {
    try {
        console.log('Get API');
        const response = await axios.get(apiurl) 
        const apiData = await response.data
        console.log('API Data ', apiData);
        dispatch(getApiSucces(apiData))
        const status = true
        dispatch(set(status))

    } catch (error) {
        console.error(error)
        dispatch(getApiFailed())
    }
}
export const getApiSucces = apiData => ({
    type: 'GET_API_SUCCESS', apiData
})
export const getApiFailed = () => ({ type: 'GET_API_FAILED' })

//--------------------------------------------------------------

//-------------------------Select-------------------------------
export const select = (nextOrder) => async (dispatch) => {
    if (nextOrder === 'QT10Y' || nextOrder === 'QT10N') {
        await dispatch(reset())
        // try {
        //     console.log('Select API');
        //     const response = await axios.post(apiurl, { order: nextOrder })
        //     const apiData = await response.data
        //     console.log('API Data ', apiData)
        //     await dispatch(getApiSucces(apiData))
        //     const status = false
        //     await dispatch(set(status))
        // } catch (error) {
        //     console.error(error)
        //     dispatch(getApiFailed())
        // }
    }
    else {
        try {
            console.log('Select API');
            const response = await axios.post(apiurl, { order: nextOrder })
            const apiData = await response.data
            console.log('API Data ', apiData);
            dispatch(getApiSucces(apiData))
        } catch (error) {
            console.error(error)
            dispatch(getApiFailed())
        }
    }
}

//--------------------------------------------------------------

//-------------------------HISTORY------------------------------
export const engineHistory = (api, selection) => (dispatch) => {
    console.log('HISAPI:', api)
    console.log('api.symptom.U1.status', api.symptom.U1.status);

    if (api.symptom.U1.status == true && api.symptom.U1.choice == 1 && selection == 1) {
        dispatch(setHistory(api.symptom.U1.historyData))
    }
    else if (api.symptom.U2.status == true && api.symptom.U2.choice == 2 && selection == 2) {
        dispatch(setHistory(api.symptom.U2.historyData))
    }
}
export const resetHistory = () => (dispatch) => {
    console.log('SSS')
    dispatch(resetHistoryStore())
}
export const setHistory = (historyState) => ({
    type: 'SET_HISTORY',
    historyState
})
export const resetHistoryStore = () => ({ type: 'RESET_HISTORY' })

//--------------------------------------------------------------


//-------------------------SET RESET----------------------------

export const set = status => ({ type: 'SET', status })
export const reset = status => ({ type: 'RESET', status })
//--------------------------------------------------------------


//---------------------------State-Disease----------------------
export const callSetContents = (status) => (dispatch) => {
    dispatch(setContents(status))
}
export const setContents = stateContent => ({
    type: 'setStateContent', stateContent
})
//--------------------------------------------------------------

//---------------------------State-Disease----------------------
export const callSetChatbox = (status) => (dispatch) => {
    dispatch(setChatbox(status))
}
export const setChatbox = stateChatbox => ({
    type: 'setStateChatbox', stateChatbox
})
//--------------------------------------------------------------