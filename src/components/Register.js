import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class Register extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target)
    const url = 'http://localhost:2000/api/v1/users/new';
  
    if(process.env.NODE_ENV === 'production'){
      url = 'https://hidden-ocean-16005.herokuapp.com/api/v1/users/new'
    }

    fetch(url, {
      method: 'POST',
      body: data,
    }
    ).then(response => response.json()).then(data => {
      this.setRedirect()
      this.renderRedirect()
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" />
        <label htmlFor="email">Enter your password</label>
        <input id="password" name="password" type="password" />
        {this.renderRedirect()}
        <button>Login</button>

      </form>
    );
  }
}

export default Register;

