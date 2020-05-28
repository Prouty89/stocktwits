export default (state, action) => {

    switch(action.type) {

       
        case 'ADD_TWEETS':
            return{
                ...state,
                tweets: action.payload, ...state.tweets 
            }
        default:
            return state;
    }
}