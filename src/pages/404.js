import React from 'react'
import { Redirect } from 'react-static'

export default class extends React.Component {
  state = {
    render: false
  }
  componentDidMount() {
    this.setState({
      render: true
    })
  }

  render() {
    return this.state.render && <Redirect to="/" />
  }
}
