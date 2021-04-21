const initState = { 
    username: "",
    repos: [],
    loading: false
}

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

export default usernameReducer;