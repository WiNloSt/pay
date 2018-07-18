import React from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/auth'
import { uiPromise } from '../firebaseSetup'

const Container = styled.div`
  height: 100vh;
  text-align: center;

  &::after {
    content: '';
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
`

export default class extends React.Component {
  componentDidMount() {
    const { host, protocol } = window.location
    const redirectUrl = `${protocol}//${host}`
    const uiConfig = {
      callbacks: {
        signInFailure: function(error) {
          console.log('error', error)
        },
        signInSuccessWithAuthResult: function(authResult) {
          var user = authResult.user
          var credential = authResult.credential
          var isNewUser = authResult.additionalUserInfo.isNewUser
          var providerId = authResult.additionalUserInfo.providerId
          var operationType = authResult.operationType
          console.log(user, credential, isNewUser, providerId, operationType)
          // Do something with the returned AuthResult.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true
        }
      },
      signInSuccessUrl: redirectUrl,
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: '/tos',
      // Privacy policy url.
      privacyPolicyUrl: '/privacy'
    }

    uiPromise.then(ui => {
      ui.start('#firebaseui-auth-container', uiConfig)
    })
  }

  render() {
    return (
      <Container>
        <div className="dib" id="firebaseui-auth-container" />
      </Container>
    )
  }
}
