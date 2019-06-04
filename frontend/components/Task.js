import React, { Component } from 'react';
import styled from 'styled-components';

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

class Task extends Component {
	render() {
		return (
			<div>
				<TaskHeader>
					<p id="title">Title</p>
					<p>4 von 12 Einheiten</p>
				</TaskHeader>
				<Progress>
					<ProgressBar />
					<AddButton>+</AddButton>
				</Progress>
			</div>
		);
	}
}

export default Task;
