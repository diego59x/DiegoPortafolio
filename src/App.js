import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';
import Home from './Home/Home.js'

export default function App() {

    return (
      <div>
        <BrowserRouter >
            <Switch>
                <Route exact path = '/' component = {Home} />
            </Switch>
        </BrowserRouter>
      </div>
    );
}