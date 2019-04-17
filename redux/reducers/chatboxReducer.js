const chatboxState = (state = false, action) => {
    switch (action.type) {
        case 'setStateChatbox':
            return action.stateChatbox
        default:
            return state
    }
}
export default chatboxState