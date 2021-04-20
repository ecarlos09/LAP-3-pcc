import React, { useState }from 'react'
import {Form, Repo} from '../../components'


const Homepage = () => {
    const [repoList, setRepoList] = useState()

    const render = () => repoList( repo => <Repo name={repo.name}/>)

    return (
        <>
        <h1>Home!</h1>
        <Form setRepoList={setRepoList}/>
        {repoList && render()}
        </>
    )
}

export default Homepage