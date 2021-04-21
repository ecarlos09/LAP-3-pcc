import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getRepoInfo } from '../../redux/actions'


const RepoInfo = () => {
    const result = useSelector(state => state.repoInfo);
    const username = useSelector(state => state.username);
    const params = useParams();

    const dispatch = useDispatch();
    
    dispatch(getRepoInfo(username, params));

    return (
        <section className="repo-info">
            <p>Please do not refresh your page (we have not installed redux persist yet)!</p>
            <h1>{result.url}</h1>
            <h1>{result.description}</h1>
            <h1>{result.language}</h1>
            <h1>{result.createdAt}</h1>
            <h1>{result.updatedAt}</h1>
            <h1>{result.forksCount}</h1>
            <h1>{result.stargazersCount}</h1>
            <h1>{result.watchersCount}</h1>
            <h1>{result.collaboratorsUrl}</h1>
            <h1>{result.contributorsUrl}</h1>
            <h1>{result.deploymentsUrl}</h1>
        </section>

    )

}

export default RepoInfo

