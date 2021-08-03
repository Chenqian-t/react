import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';

export default function App() {
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/notfound">
                <NotFound />
            </Route>
            <Redirect to='/notfound'/>
        </Switch>
    );
}


function NotFound() {
    return (
        <h1>
            404
        </h1>
    )
}
