import React from 'react'

import { TextField, Button } from '@material-ui/core/'

import Layout from '../components/layout'

class Newsletter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { firstName: '', lastName: '', email: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    alert(
      'You submitted firstName: ' +
        this.state.firstName +
        ' lastName: ' +
        this.state.lastName
    )
  }

  render() {
    return (
      <Layout>
        <form onSubmit={this.handleSubmit}>
          <TextField label="First Name" name="firstName" variant="outlined" />
          <TextField label="Last Name" name="lastName" variant="outlined" />
          <Button variant="contained" type="submit" color="primary">
            Submit
          </Button>
        </form>
      </Layout>
    )
  }
}

export default Newsletter
