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
	cursor: pointer;
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
	cursor: pointer;
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
		showForm: false,
		showDetails: false,
		segments: this.props.task.segments
	};

	// componentDidMount() {
	// 	this.setState({ segments: this.props.task.segments });
	// 	console.log(this.state.segments);
	// }

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
		this.props.task.finishedUnits = task.finishedUnits + units;
		this.toggleForm();

		const taskPromise = axios.post('http://localhost:8888/api/addSegments', {
			finishedUnits: units,
			task: this.props.task._id
		});
		const segmentPromise = axios.post(
			'http://localhost:8888/api/createSegment',
			{
				units,
				description,
				task: task._id
			}
		);
		const [taskRes, segmentRes] = await Promise.all([
			taskPromise,
			segmentPromise
		]);
		console.log(segmentRes);
		const updatedSegments = this.state.segments.push(segmentRes.data);
		console.log(updatedSegments);
		this.setState({
			segments: updatedSegments
		});
		// TODO handle errors
	};

	toggleDetails = e => {
		if (e.target.name === 'addButton') return;
		this.setState(prevState => ({ showDetails: !prevState.showDetails }));
	};

	render() {
		const { task } = this.props;
		console.log(this.state.segments);
		return (
			<StyledTask>
				<TaskHeader onClick={this.toggleDetails}>
					<p id="title">{task.title}</p>
					<p>
						{task.finishedUnits} von {task.units} {task.unit}
					</p>
				</TaskHeader>
				<Progress onClick={this.toggleDetails}>
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
				{this.state.showDetails && (
					<TaskDetails segments={this.state.segments} unit={task.unit} />
				)}
			</StyledTask>
		);
	}
}

export default Task;
