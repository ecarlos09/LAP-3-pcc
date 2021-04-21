import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar, Footer } from './layout';
import {Homepage, Repopage} from './pages'


function App() {
    return (
        <>
        <NavBar />
        <Switch>
            <Route exact path ="/">
                <Homepage />
            </Route>
            <Route path ="/Repopage">
                <Repopage />
            </Route>
        </Switch>
        <Footer />
        </>
       
    )
}

export default App;