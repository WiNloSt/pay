import React from 'react'
import styled from 'styled-components'
import { Toggle } from 'react-powerplug'

const LoginLogoutContainer = styled.div``

export class LoginLogoutButton extends React.Component {
  render() {
    return (
      <LoginLogoutContainer>
        <Toggle>
          {({ on: loggedIn, toggle }) => (
            <a className="b f4" onClick={toggle}>
              {loggedIn ? 'logout' : 'login'}
            </a>
          )}
        </Toggle>
      </LoginLogoutContainer>
    )
  }
}
