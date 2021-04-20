import React, { useState }from 'react'
import {Form, Repo} from '../../components'


const Homepage = ({username, setUsername}) => {
    const [repoList, setRepoList] = useState([])


   
    return (
        <>
        <h1>Home!</h1>
        <Form setRepoList={setRepoList} username={username} setUsername={setUsername}/>
        <Repo repoList={repoList} setRepoList ={setRepoList}/>
        </>
    )
}

export default Homepage