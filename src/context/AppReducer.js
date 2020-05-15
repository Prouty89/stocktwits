export default (state, action) => {

    switch(action.type) {
        case 'DELETE_TWEET':
            return{
                ...state,
                tweets: state.tweets.filter(tweet => tweet.id !== action.payload)
            }
        case 'PULL_TWEETS':
            return{
                ...state,
                tweets: [ action.payload, ...state.tweets ]
            }
        default:
            return state;
    }
}