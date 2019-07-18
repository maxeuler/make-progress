import React, { Component } from 'react';
import Form from './styles/Form';

class Signin extends Component {
  render() {
    return (
      <Form method="POST">
        <h3>Sign In</h3>
        <label htmlFor="email">
          Email
          <input type="email" name="email" placeholder="Email" required />
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
        <button type="submit">Sign In</button>
      </Form>
    );
  }
}

export default Signin;
