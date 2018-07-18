import React from 'react'
import styled from 'styled-components'

import { LoginLogoutButton } from './LoginLogoutButton'

const Container = styled.nav`
  background: #d4efff;
  box-shadow: 0 0 0.25rem #aaa;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  height: 3rem;
`

export class Nav extends React.Component {
  render() {
    return (
      <Container>
        <LoginLogoutButton />
      </Container>
    )
  }
}
