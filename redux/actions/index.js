import axios from 'axios'


//-------------------------API-Server----------------------------
const apiurl = 'https://d2xapi.medizerva.com/'
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
    if (nextOrder.substring(0, 1) === 'S') {
        try {
            console.log('Select API');
            const response = await axios.post(apiurl, { order: nextOrder })
            const apiData = await response.data
            console.log('API Data ', apiData);
            await dispatch(getApiSucces(apiData))
            const status = false
            await dispatch(set(status))
        } catch (error) {
            console.error(error)
            dispatch(getApiFailed())
        }
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

//-------------------------SET RESET----------------------------

export const set = status => ({ type: 'SET', status })
export const reset = status => ({ type: 'RESET', status })
//--------------------------------------------------------------


import {
    INCREASE_NUMBER,
    DECREASE_NUMBER,
    MULCREASE_NUMBER,
    EDIT_SUNDAY,
    ADD_NAME
} from '../types';

export const increaseNumber = () => (dispatch) => {
    dispatch({
        type: INCREASE_NUMBER,
        //value: 1
    })
}

export const decreaseNumber = () => (dispatch) => {
    dispatch({
        type: DECREASE_NUMBER,
        value: 1

    })
}

export const mulcreaseNumber = () => (dispatch) => {
    dispatch({
        type: MULCREASE_NUMBER,
        value: 2
    })
}

export const editSunday = () => (dispatch) => {
    dispatch({
        type: EDIT_SUNDAY,
        value: 1
    })
}
export const addName = (x) => (dispatch) => {
    const name = x
    console.log('foo:' + x)
    console.log('name:' + name)
    dispatch({
        type: ADD_NAME,
        name
    })
}