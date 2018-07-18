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

const Nav = styled.nav`
  background: #d4efff;
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
