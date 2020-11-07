import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import App from './pages/App/App'
import Contact from './pages/Contact'
import Learn from './pages/Learn'
import Landing from './pages/Landing'

import { defaultTheme } from './themes'
import { GraphoraProvider } from './components/GraphoraContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/contacto">
            <Contact />
          </Route>
          <Route exact path="/aprender">
            <Learn />
          </Route>
          <Route exact path="/app">
            <GraphoraProvider>
              <App />
            </GraphoraProvider>
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
