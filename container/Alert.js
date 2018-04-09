import { h, render, Component } from 'preact'
import Button from '../components/Button'


class Alert extends Component {
  constructor(props) {
    super(props)
  }

  logout() {
    console.log('look at me now')
  }

  render() {
    return (
      <Button func={ this.logout } text="Log Me" />
    )
  }
}

export default Alert