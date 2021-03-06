import React, { Component } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;
  font-size: 2rem;
  color: ${props => props.theme.primary};
  h1 {
    margin: 1rem;
  }
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <h3>Make Progress</h3>
        <h1>💯</h1>
        <p>Account</p>
      </StyledHeader>
    );
  }
}

export default Header;
