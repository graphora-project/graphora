import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import App from './pages/App'
import Contact from './pages/Contact'
import Learn from './pages/Learn'
import Landing from './pages/Landing'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/contacto">
          <Contact />
        </Route>
        <Route exact path="/aprender">
          <Learn />
        </Route>
        <Route exact path="/app">
          <App />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
