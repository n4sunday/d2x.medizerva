const history = {
    hsd: [],
    count:-1
}
const historyStore = (state = history, action) => {
    switch (action.type) {
        case 'SET_HISTORY':
            return state = {
                ...state,
                count:state.count+=1,
                hsd: [...state.hsd, { hsd1: action.historyState }]
            }
        case 'RESET_HISTORY':
            return state = {
                ...state,
                count:-1,
                hsd: []
            }
        default:
            return state
    }
}
export default historyStore