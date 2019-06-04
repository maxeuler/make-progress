import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	width: 90%;
	background: ${props => props.theme.bright};
	justify-content: space-evenly;
	align-items: center;
	padding: 2rem;
	border-radius: 3px;
	margin: 1rem 0;
	label {
		padding: 0 1rem;
		width: 80%;
		font-size: 1.4rem;
		input {
			display: block;
			margin: 0.5rem 0;
			width: 90%;
			line-height: 3;
			border: 1px solid ${props => props.theme.border};
			border-radius: 2px;
		}
	}
	#units {
		width: 60px;
	}
	button {
		width: 6rem;
		background: none;
		border: 0;
		color: ${props => props.theme.dark};
		font-size: 2rem;
	}
`;

class ProgressForm extends Component {
	render() {
		return (
			<Form
				action=""
				onSubmit={e => {
					e.preventDefault();
					this.props.addTask();
				}}
			>
				<label htmlFor="units">
					Units
					<input type="number" id="units" />
				</label>
				<label htmlFor="description">
					Description
					<input type="text" id="description" />
				</label>
				<button type="submit">ADD</button>
			</Form>
		);
	}
}

export default ProgressForm;
