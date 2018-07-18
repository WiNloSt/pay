import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'
import 'firebase/auth'

const context = React.createContext({})

export class StoreProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  state = {
    authUser: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(
      user => {
        if (user) {
          console.log('user is signed int')
          this.setState({
            authUser: user
          })
        } else {
          console.log('user is signed out')
          this.setState({
            authUser: null
          })
        }
      },
      function(error) {
        console.log(error)
      }
    )
  }

  render() {
    console.log(this.state)
    return (
      <context.Provider
        value={{
          ...this.state,
          signOut: () => {
            firebase.auth().signOut()
          }
        }}
      >
        {this.props.children}
      </context.Provider>
    )
  }
}

export const StoreConsumer = context.Consumer
