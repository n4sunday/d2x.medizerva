const apiReducer = (state = 0, action) => {
    switch (action.type){
        case 'GET_API_SUCCESS':
            console.log('action',action.apiData)
            return action.apiData
        case 'GET_API_FAILED':
            console.log('action: Failed')
            return action.apiData
        default:
            return state 
    }
}
export default apiReducer