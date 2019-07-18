import React, { Component } from 'react';
import Form from './styles/Form';

class Signup extends Component {
  render() {
    return (
      <Form method="POST">
        <h3>Sign Up</h3>
        <label htmlFor="email">
          Email
          <input type="email" name="email" placeholder="Email" required />
        </label>
        <label htmlFor="username">
          Username
          <input type="text" name="username" placeholder="Username" required />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </label>
        <label htmlFor="password-confirm">
          Password
          <input
            type="password"
            name="password-confirm"
            placeholder="Confirm password"
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </Form>
    );
  }
}

export default Signup;
