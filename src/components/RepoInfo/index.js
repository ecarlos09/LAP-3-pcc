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
        <h1>url:{result}</h1>
    )

}

export default RepoInfo

