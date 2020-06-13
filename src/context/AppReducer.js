export default (state, action) => {

    switch(action.type) {
        case 'ADD_SYMBOLS':
            return{
                ...state,
                symbols: action.payload, ...state.symbols
            }
        case 'ADD_MESSAGES':
        return{
            ...state,
            messages: action.payload, ...state.messages
        }
        default:
        return state;
    }
}