import React from 'react'
import { Link as UnstyledLink } from 'react-static'
import styled from 'styled-components'
import { Toggle } from 'react-powerplug'

const Link = styled(UnstyledLink)`
  user-select: none;
`

export class LoginLogoutButton extends React.Component {
  render() {
    return (
      <Toggle>
        {({ on: loggedIn, toggle }) =>
          loggedIn ? (
            <Link className="b f4" onClick={toggle}>
              Logout
            </Link>
          ) : (
            <Link className="b f4" to="/login">
              Login
            </Link>
          )
        }
      </Toggle>
    )
  }
}
