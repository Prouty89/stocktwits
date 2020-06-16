export default (state, action) => {

    switch(action.type) {
        case 'ADD_SYMBOLS':
            return{
                ...state,
                symbols: action.payload, ...state.symbols
            }
        default:
        return state;
    }
}