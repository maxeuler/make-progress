import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProgressForm from './ProgressForm';
import ProgressBar from './ProgressBar';

const TaskHeader = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	p {
		color: ${props => props.theme.bright};
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
	border: 1px solid ${props => props.theme.bright};
	border-radius: 20px;
	color: ${props => props.theme.bright};
	font-size: 2rem;
	cursor: pointer;
`;

const StyledTask = styled.div`
	margin: 2rem 0;
`;

class Task extends Component {
	state = {
		showForm: false
	};

	toggleForm = () => {
		this.setState(prevState => ({
			showForm: !prevState.showForm
		}));
	};

	addProgress = async (units, description) => {
		const { task } = this.props;
		if (task.finishedUnits + units > task.units) {
			units = task.units - task.finishedUnits;
		}
		const taskPromise = axios.post('http://localhost:8888/api/addSegments', {
			finishedUnits: units,
			task: this.props.task._id
		});
		const segmentPromise = axios.post(
			'http://localhost:8888/api/createSegment',
			{
				units,
				description
			}
		);
		const [taskRes, segmentRes] = await Promise.all([
			taskPromise,
			segmentPromise
		]);
		this.props.task.finishedUnits = taskRes.data.finishedUnits;
		this.toggleForm();
	};

	render() {
		const { task } = this.props;
		return (
			<StyledTask>
				<TaskHeader>
					<p id="title">{task.title}</p>
					<p>
						{task.finishedUnits} von {task.units} {task.unit}
					</p>
				</TaskHeader>
				<Progress>
					<ProgressBar finishedUnits={task.finishedUnits} units={task.units} />
					<AddButton onClick={this.toggleForm}>+</AddButton>
				</Progress>
				{this.state.showForm && (
					<ProgressForm addProgress={this.addProgress} task={task} />
				)}
			</StyledTask>
		);
	}
}

export default Task;
