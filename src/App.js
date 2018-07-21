import React from 'react'
import { Router, Switch, Route } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import styled from 'styled-components'

import './firebaseSetup'
import { ThemeProvider } from './components/ThemeProvider'
import Login from './pages/Login'
import Tos from './pages/Tos'
import Privacy from './pages/Privacy'
import { Nav } from './components/Nav'
import { StoreProvider } from './components/Store'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`

const App = () => (
  <Router>
    <StoreProvider>
      <ThemeProvider>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/tos" component={Tos} />
          <Route exact path="/privacy" component={Privacy} />
          <Route
            render={() => (
              <Container>
                <Nav />
                <div className="mv4 mh3">
                  <Routes />
                </div>
              </Container>
            )}
          />
        </Switch>
      </ThemeProvider>
    </StoreProvider>
  </Router>
)

export default hot(module)(App)
