import axios from 'axios';

export const getResult = (userSearch) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`https://api.github.com/users/${userSearch}/repos`)
            let username = data[0].owner.login;
            let list = data.map(repo => repo.name);
            dispatch({
                type: 'LOAD_REPOS',
                payload: {username, list}
            })
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err.message
            })
        }
    }
}

export const getRepoInfo = (userSearch, params) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`https://api.github.com/users/${userSearch}/repos`);
            let result = data[params.id - 1].url;
            dispatch({
                type: 'LOAD_REPO_INFO',
                payload: result
            })                        
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err.message
            })
        }
    }
}