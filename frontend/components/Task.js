import React, { Component } from 'react';
import styled from 'styled-components';
import ProgressForm from './ProgressForm';

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

const ProgressBar = styled.div`
	display: block;
	width: 90%;
	height: 40px;
	background: ${props => props.theme.bright};
	border-radius: 4px;
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

	addProgress = (units, description) => {
		console.log(units, description);
		this.toggleForm();
	};

	render() {
		return (
			<StyledTask>
				<TaskHeader>
					<p id="title">Title</p>
					<p>4 von 12 Einheiten</p>
				</TaskHeader>
				<Progress>
					<ProgressBar />
					<AddButton onClick={this.toggleForm}>+</AddButton>
				</Progress>
				{this.state.showForm && <ProgressForm addProgress={this.addProgress} />}
			</StyledTask>
		);
	}
}

export default Task;