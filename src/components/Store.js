import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'
import 'firebase/auth'
import { withRouter } from 'react-static'

const context = React.createContext({})

class Provider extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    history: PropTypes.object
  }

  state = {
    authUser: {
      loading: true
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(
      user => {
        if (user) {
          this.setState({
            authUser: user
          })
        } else {
          this.setState({
            authUser: {
              loading: true
            }
          })
        }
      },
      function(error) {
        console.log(error)
      }
    )
  }

  render() {
    return (
      <context.Provider
        value={{
          ...this.state,
          signOut: () => {
            firebase.auth().signOut()
            this.props.history.replace('/')
          }
        }}
      >
        {this.props.children}
      </context.Provider>
    )
  }
}

export const StoreProvider = withRouter(Provider)

export const StoreConsumer = context.Consumer
