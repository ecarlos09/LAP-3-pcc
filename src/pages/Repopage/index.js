import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {RepoInfo} from '../../components'

const Repopage = ({username, setUsername}) => {
    

    return (
        <>
        <h1>REPO PAGE</h1>
        <Switch>
            <Route path={"/Repopage/:id"} >
                <RepoInfo username={username}/>
            </Route>
        </Switch>
        </>
    )

}

export default Repopage