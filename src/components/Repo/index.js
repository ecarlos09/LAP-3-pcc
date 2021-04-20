import React, { useState}  from 'react';
import {NavLink, Switch} from 'react-router-dom'

const Repo = ({repoList, setRepoList}) => {
    


    const list =  repoList.map( (name,index) => <NavLink to={`/Repopage/${index}`}><h1>{name}</h1></NavLink>)


    return (
        
        <>
        <h1>Repolist</h1>

       {list}
        </>
    )


}

export default Repo