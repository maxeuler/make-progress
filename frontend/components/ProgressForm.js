import React, { Component } from 'react';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 90%;
  background: #fff;
  border: 1px solid #ddd;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;
  border-radius: 3px;
  margin: 1rem 0;
  label {
    padding: 0 1rem;
    width: 80%;
    font-size: 1.4rem;
    color: ${props => props.theme.primary};
    input {
      display: block;
      margin: 0.5rem 0;
      padding: 0.25rem;
      width: 90%;
      line-height: 2;
      border: 1px solid #ddd;
      border-radius: 2px;
      font-size: 1.5rem;
      outline: none;
    }
  }
  #units {
    width: 60px;
  }
  button {
    width: 6rem;
    background: none;
    border: 0;
    color: ${props => props.theme.primary};
    font-size: 2rem;
    cursor: pointer;
    margin-right: 2rem;
  }
`;

class ProgressForm extends Component {
  state = {
    units: 0,
    description: '',
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name]: val,
    });
  };

  render() {
    const { task } = this.props;
    return (
      <Form
        method="POST"
        onSubmit={e => {
          e.preventDefault();
          const { units, description } = this.state;
          // if number field was empty units is NaN
          // we set it to 0
          const validUnits = units || 0;
          this.props.addProgress(validUnits, description);
        }}
      >
        <label htmlFor="units">
          Units
          <input
            name="units"
            type="number"
            onChange={this.handleChange}
            value={this.state.units}
            min={0 - task.finishedUnits}
            max={task.units - task.finishedUnits}
          />
        </label>
        <label htmlFor="description">
          Description
          <input
            type="text"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
        </label>
        <button type="submit">ADD</button>
      </Form>
    );
  }
}

export default ProgressForm;
