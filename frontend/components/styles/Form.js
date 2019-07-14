import styled from 'styled-components';

const Form = styled.form`
  background: ${props => props.theme.bright};
  padding: 3rem;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 4rem;
  border-radius: 3px;
  label {
    margin: 2rem 0;
    display: block;
    font-size: 2rem;
  }
  input {
    width: 100%;
    font-size: 1.6rem;
    padding: 0.25rem 0.5rem;
    margin: 0.25rem 0;
    line-height: 2;
    border-radius: 3px;
    border: none;
  }
  h3 {
    font-size: 5rem;
    margin: 0;
    text-align: right;
  }
  button {
    font-size: 2rem;
    padding: 1rem;
    border: none;
    border-radius: 3px;
    background: ${props => props.theme.dark};
    color: ${props => props.theme.bright};
    opacity: 0.95;
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;
    :hover {
      opacity: 1;
    }
  }
`;

export default Form;
