import React from 'react';

import { Typography, TextField, Button, Grid } from '@material-ui/core/';

import Layout from '../components/layout';

class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      formErrors: {},
      firstNameError: false,
      lastNameError: false,
      emailError: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChange(event) {
    const fieldName = event.target.name;
    const value = event.target.value;
    this.setState({
      [fieldName]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validateForm()) {
      // TODO: Need to connect to MailChimp or use Netlify forms for signup
      if(!alert('Thank you for joining the SESA NewsLetter!\n')) {
        window.location.href = "/";
      };
    }
    console.log(this.state.formErrors);
  }

  validateForm() {
    let formIsValid = true;
    let errors = {};
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let email = this.state.email;

    if (firstName === '') {
      errors['firstName'] = 'First Name cannot be empty';
      formIsValid = false;
      this.setState({ firstNameError: true });
    } else if (typeof firstName !== undefined) {
      if (!firstName.match(/^[a-zA-Z]+$/)) {
        errors['firstName'] = 'First Name can only contain letters';
        formIsValid = false;
        this.setState({ firstNameError: true });
      }
    }

    if (lastName === '') {
      errors['lastName'] = 'Last Name cannot be empty';
      formIsValid = false;
      this.setState({ lastNameError: true });
    } else if (typeof lastName !== undefined) {
      if (!lastName.match(/^[a-zA-Z]+$/)) {
        errors['lastName'] = 'Last Name can only contain letters';
        formIsValid = false;
        this.setState({ lastNameError: true });
      }
    }

    if (email === '') {
      errors['email'] = 'Email cannot be empty';
      formIsValid = false;
      this.setState({ emailError: true });
    } else if (typeof email !== undefined) {
      if (!email.match(/\S+@\S+\.\S+/)) {
        errors['email'] = 'Invalid Email Format';
        formIsValid = false;
        this.setState({ emailError: true });
      }
    }
    this.setState({ formErrors: errors });
    return formIsValid;
  }

  render() {
    const formContainerStyle = {
      width: '33%',
      margin: '2rem auto',
      paddingBottom: '2rem',
      border: '2px solid #990012',
      borderRadius: '2rem',
    };

    const formItemStyle = {
      marginTop: '2em',
    };

    const labels = {
      'First Name': 'firstName',
      'Last Name': 'lastName',
      Email: 'email',
    };

    return (
      <Layout>
        <Typography
          variant="h3"
          style={{
            textAlign: 'center',
            marginTop: '4rem',
          }}
          color="primary"
        >
          Sign Up for our Newsletter!
        </Typography>
        <form name="Newsletter Form" data-netlify="true" onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="Newsletter Form" />
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={formContainerStyle}
          >
            {Object.keys(labels).map((key, index) => {
              return (
                <TextField
                  label={key}
                  key={key}
                  name={labels[key]}
                  style={formItemStyle}
                  onChange={this.handleChange}
                  error={this.state.formErrors[labels[key]]}
                  helperText={this.state.formErrors[labels[key]]}
                />
              );
            })}
            <Button
              variant="contained"
              type="submit"
              color="primary"
              style={formItemStyle}
            >
              Sign Up
            </Button>
          </Grid>
        </form>
      </Layout>
    );
  }
}

export default Newsletter;
