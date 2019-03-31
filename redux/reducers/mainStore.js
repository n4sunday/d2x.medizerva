const mainStore = (state = true, action) => {
    switch (action.type){
        case 'SET':
            return action.status
        case 'RESET':
            return false
        default:
            return state 
    }
}
export default mainStore