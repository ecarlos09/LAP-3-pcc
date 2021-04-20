import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import {Homepage, Repopage} from './pages'


function App() {
    let [username, setUsername] = useState("")
    return (
        <>
        <Switch>
            <Route exact path ="/">
                <Homepage username={username} setUsername={setUsername}/>
            </Route>
            <Route path ="/Repopage">
                <Repopage username={username} setUsername={setUsername}/>
            </Route>
        </Switch>
        </>
       
    )
}

export default App;