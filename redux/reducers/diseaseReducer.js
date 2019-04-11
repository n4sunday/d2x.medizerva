const diseaseState = (state = 'C1', action) => {
    switch (action.type) {
        case 'setStateContent':
            return action.stateContent
        default:
            return state
    }
}
export default diseaseState