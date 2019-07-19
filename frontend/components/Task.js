import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProgressForm from './ProgressForm';
import ProgressBar from './ProgressBar';
import TaskDetails from './TaskDetails';

const TaskHeader = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  color: #222;
  p {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    font-weight: 300;
  }
  #title {
    font-size: 3rem;
    font-weight: 400;
  }
`;

const Progress = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;

const AddButton = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 4rem;
  background: none;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 20px;
  color: ${props => props.theme.primary};
  font-size: 2rem;
  outline: none;
  cursor: pointer;
`;

const StyledTask = styled.div`
  margin: 2rem 0;
`;

const DetailsButton = styled.button`
  background: none;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 3px;
  color: ${props => props.theme.primary};
  margin-left: 2rem;
  font-size: 1.5rem;
  outline: none;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 3rem;
  color: ${props => props.theme.primary};
  margin-right: 1rem;
  cursor: pointer;
  outline: none;
`;

class Task extends Component {
  state = {
    showForm: false,
    showDetails: false,
    segments: this.props.task.segments,
  };

  toggleForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm,
    }));
  };

  addProgress = async (addedUnits, description) => {
    const { task } = this.props;
    let units = addedUnits;
    if (task.finishedUnits + units > task.units) {
      units = task.units - task.finishedUnits;
    }
    this.props.task.finishedUnits = task.finishedUnits + units;
    this.toggleForm();

    const taskPromise = axios.post('http://localhost:8888/api/addSegments', {
      finishedUnits: units,
      task: this.props.task._id,
    });
    const segmentPromise = axios.post(
      'http://localhost:8888/api/createSegment',
      {
        units,
        description,
        task: task._id,
      }
    );
    const [taskRes, segmentRes] = await Promise.all([
      taskPromise,
      segmentPromise,
    ]);
    this.setState(prevState => ({
      segments: [...prevState.segments, Object.assign({}, segmentRes.data)],
    }));
    // TODO handle errors
  };

  toggleDetails = e => {
    this.setState(prevState => ({ showDetails: !prevState.showDetails }));
  };

  render() {
    const { task } = this.props;
    return (
      <StyledTask>
        <TaskHeader>
          <span style={{ display: 'flex' }}>
            <DeleteButton onClick={() => this.props.delete(task._id)}>
              &times;
            </DeleteButton>
            <p id="title">{task.title}</p>
            <DetailsButton onClick={this.toggleDetails}>
              {this.state.showDetails ? 'Hide Details' : 'Show Details'}
            </DetailsButton>
          </span>
          <p>
            {task.finishedUnits} von {task.units} {task.unit}
          </p>
        </TaskHeader>
        <Progress>
          <ProgressBar finishedUnits={task.finishedUnits} units={task.units} />
          {task.finishedUnits !== task.units && (
            <AddButton name="addButton" onClick={this.toggleForm}>
              +
            </AddButton>
          )}
        </Progress>
        {this.state.showForm && (
          <ProgressForm addProgress={this.addProgress} task={task} />
        )}
        {this.state.showDetails &&
          (this.state.segments.length ? (
            <TaskDetails segments={this.state.segments} unit={task.unit} />
          ) : (
            <TaskHeader>
              <p id="title">You have to do something first 🏌🏼‍</p>
            </TaskHeader>
          ))}
      </StyledTask>
    );
  }
}

export default Task;
