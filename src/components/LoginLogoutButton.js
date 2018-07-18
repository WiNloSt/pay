import React from 'react'
import styled from 'styled-components'
import { Toggle } from 'react-powerplug'

const Link = styled.a`
  user-select: none;
`

export class LoginLogoutButton extends React.Component {
  render() {
    return (
      <Toggle>
        {({ on: loggedIn, toggle }) => (
          <Link className="b f4" onClick={toggle}>
            {loggedIn ? 'logout' : 'login'}
          </Link>
        )}
      </Toggle>
    )
  }
}
