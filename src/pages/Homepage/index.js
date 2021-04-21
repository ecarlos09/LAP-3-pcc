import React, { useState }from 'react';
import {Form, Repo} from '../../components';
import{ Header } from '../../layout';


const Homepage = ({username, setUsername}) => {
    const [repoList, setRepoList] = useState([])
   
    return (
        <>
        <Header />
        <Form setRepoList={setRepoList} username={username} setUsername={setUsername}/>
        <Repo repoList={repoList} setRepoList ={setRepoList}/>
        </>
    )
}

export default Homepage;