import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './Home/Home'
import KnowMe from './KnowMe/KnowMe'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/KnowMe" component={KnowMe} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
