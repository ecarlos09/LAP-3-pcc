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

    const renderRows = () => {
        let repoInfoArray = Object.entries(result);
        return repoInfoArray.map( ([key, value]) => (
            <tr>
                <td>{key}</td>
                <td>{value}</td>
            </tr>
        ));
    };

    return (
        <section className="repo-info">
            <p>Please do not refresh your page (we have not installed redux persist yet)!</p>

            <table style = {{border: "1px solid black", width:"100vw", textAlign: "center"}}>
                <thead style = {{color: "white", backgroundColor:"grey"}}>
                    <tr>
                        <th>...</th>
                        <th>...</th>
                    </tr>
                </thead>
                <tbody>
                    { renderRows() }
                </tbody>
            </table>

        </section>

    )

}

export default RepoInfo

