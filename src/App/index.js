import React from 'react'
import { Router } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
// import 'normalize.css'
//
import Routes from 'react-static-routes'
import { ThemeProvider } from '../components/ThemeProvider'
import { LoginLogoutButton } from '../components/LoginLogoutButton'
import pattern from './assets/black-opaque.png'

injectGlobal`
  body {
    background-color: #def;
    background-image: url(${pattern})
  }
`

const Nav = styled.nav`
  background: white;
  box-shadow: 0 0 0.25rem #aaa;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem;
`

const App = () => (
  <Router>
    <ThemeProvider>
      <React.Fragment>
        <Nav>
          <LoginLogoutButton />
        </Nav>
        <div>
          <Routes />
        </div>
      </React.Fragment>
    </ThemeProvider>
  </Router>
)

export default hot(module)(App)
