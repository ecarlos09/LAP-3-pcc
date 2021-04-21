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