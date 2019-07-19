import React, { Component } from 'react';
import styled from 'styled-components';
import Signup from './Signup';
import Signin from './Signin';

const ToggleButton = styled.button`
  border: none;
  background: none;
  color: ${props => props.theme.primary};
  margin: 2rem auto;
  display: flex;
  justify-self: center;
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  :hover {
    font-weight: 500;
  }
`;

class Auth extends Component {
  state = {
    hasAccount: false,
  };

  toggleAccountState = () => {
    this.setState(prevState => ({ hasAccount: !prevState.hasAccount }));
  };

  render() {
    return (
      <>
        {this.state.hasAccount ? (
          <>
            <Signin></Signin>
            <ToggleButton type="button" onClick={this.toggleAccountState}>
              Don't have an Account? 👉🏼 Sign Up
            </ToggleButton>
          </>
        ) : (
          <>
            <Signup></Signup>
            <ToggleButton type="button" onClick={this.toggleAccountState}>
              Already have an Account? 👉🏼 Sign In
            </ToggleButton>
          </>
        )}
      </>
    );
  }
}

export default Auth;
