const mainStore = (state = true, action) => {
    switch (action.type){
        case 'SET':
            return action.status
        default:
            return state 
    }
}
export default mainStore