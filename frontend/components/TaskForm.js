import React, { Component } from 'react';
import { Form } from './ProgressForm';

class TaskForm extends Component {
  state = {
    title: '',
    unit: '',
    units: 0,
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Form
        method="POST"
        onSubmit={e => {
          e.preventDefault();
          this.props.createTask(this.state);
          this.setState({ title: '', unit: '', units: 0 });
        }}
      >
        <label htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            placeholder="Read 'Harry Potter'"
            onChange={this.onChange}
            value={this.state.title}
          />
        </label>
        <label htmlFor="unit">
          Which Unit?
          <input
            type="text"
            name="unit"
            placeholder="Chapters"
            onChange={this.onChange}
            value={this.state.unit}
          />
        </label>
        <label htmlFor="units">
          How many Units?
          <input
            type="number"
            name="units"
            placeholder="12"
            onChange={this.onChange}
            value={this.state.units}
          />
        </label>
        <button type="submit">Create</button>
      </Form>
    );
  }
}

export default TaskForm;
