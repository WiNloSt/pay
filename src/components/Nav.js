import React from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/auth'

import { LoginLogoutButton } from './LoginLogoutButton'

const Container = styled.nav`
  background: #d4efff;
  box-shadow: 0 0 0.25rem #aaa;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem;
`

export class Nav extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(
      function(user) {
        if (user) {
          // User is signed in.
          console.log('user is signed int')
        } else {
          // User is signed out.
          console.log('user is signed out')
        }
      },
      function(error) {
        console.log(error)
      }
    )
  }

  render() {
    return (
      <Container>
        <LoginLogoutButton />
      </Container>
    )
  }
}
