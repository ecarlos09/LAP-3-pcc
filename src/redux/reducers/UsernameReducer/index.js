// in reducers/catsReducer.js
const initState = { 
    username: "",
    repos: [],
    loading: false,
    error: false
}

// It will not yet have a state to pass in so we define an initState and pass in as a default argument for this first call.
const usernameReducer = (state=initState, action) => {
    switch(action.type){
        case "LOAD_REPOS":
            const username = action.payload.username;
            const repoList = action.payload.list;
            return { ...state, username: username, repos: repoList };
        case 'SET_ERROR':
            return { ...state, error: action.payload }
        default:
            return state;
    }
}

// Remember to export it so we can access from other files!
export default usernameReducer;