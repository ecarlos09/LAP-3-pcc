import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RepoInfo = ({username}) => {
    const [result, setResult] = useState("")

    const params = useParams();

    useEffect(() => {
        console.log(username)
        getRepoInfo(username);
    }, [])


    const getRepoInfo = async (name)=> {
        console.log(name)
        try{
            const {data} = await axios.get(`https://api.github.com/users/${name}/repos`)
            let result = data[params.id].url
            console.log(result)
            setResult(result)
        } catch(err) {
            console.warn(err);
        }
    }

    return (
        <h1>url:{result}</h1>
    )

}

export default RepoInfo

