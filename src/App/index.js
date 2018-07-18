import React from 'react'
import { Router, Switch, Route } from 'react-static'
import { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
// import 'normalize.css'
//
import Routes from 'react-static-routes'
import '../firebaseSetup'
import { ThemeProvider } from '../components/ThemeProvider'
import pattern from './assets/black-opaque.png'
import Login from '../pages/Login'
import Tos from '../pages/Tos'
import Privacy from '../pages/Privacy'
import { Nav } from '../components/Nav'

injectGlobal`
  body {
    position: relative;
    min-height: 100vh;

    &::after {
      content: '';
      position: absolute;
      opacity: 0.5;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-image: url(${pattern});
      z-index: -1;
    }
  }
`

const App = () => (
  <Router>
    <ThemeProvider>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/tos" component={Tos} />
        <Route exact path="/privacy" component={Privacy} />
        <Route
          render={() => (
            <React.Fragment>
              <Nav />
              <div>
                <Routes />
              </div>
            </React.Fragment>
          )}
        />
      </Switch>
    </ThemeProvider>
  </Router>
)

export default hot(module)(App)
