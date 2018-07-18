import React from 'react'
import { Link as UnstyledLink } from 'react-static'
import styled from 'styled-components'
import { StoreConsumer } from './Store'

const Link = styled(UnstyledLink)`
  user-select: none;
`

const UserProfileImage = styled.div`
  background-image: url(${props => props.url});
  width: 2rem;
  height: 2rem;
  background-size: contain;
  border-radius: 50%;
`

export class LoginLogoutButton extends React.Component {
  render() {
    return (
      <StoreConsumer>
        {({ authUser, signOut }) =>
          authUser ? (
            <React.Fragment>
              <UserProfileImage url={authUser.photoURL} />
              <Link to="#" className="b f4 ml2">
                <span onClick={signOut}>Logout</span>
              </Link>
            </React.Fragment>
          ) : (
            <Link className="b f4" to="/login">
              <span>Login</span>
            </Link>
          )
        }
      </StoreConsumer>
    )
  }
}
