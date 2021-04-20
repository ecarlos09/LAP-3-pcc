import React, { useState }from 'react'
import {Form, RepoList} from '../../components'


const Homepage = () => {
    const [repoList, setRepoList] = useState()

    const render = () => repoList( repo => <Repo name={repo.name}/>)

    return (
        <>
        <Form setRepoList={setRepoList}/>
        {repoList && render()}
        </>
    )
}

export default Homepage