import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from './layout';
import {Homepage, Repopage} from './pages'


function App() {
    let [username, setUsername] = useState("")
    return (
        <>
        <NavBar />
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