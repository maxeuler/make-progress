import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DetailsList = styled.ul`
	background: ${props => props.theme.bright};
	color: ${props => props.theme.dark};
	font-size: 2rem;
	border-radius: 3px;
	width: 90%;
	list-style: none;
	padding: 2rem;
	padding-left: 6rem;
	span {
		margin-right: 2rem;
	}
`;

class TaskDetails extends Component {
	render() {
		return (
			<DetailsList>
				{this.props.segments.map(segment => (
					<li key={segment._id}>
						<span>
							{segment.units}{' '}
							{segment.units == 1 && this.props.unit.slice(-1) == 's'
								? this.props.unit.slice(0, -1)
								: this.props.unit}
						</span>
						{segment.description}
					</li>
				))}
			</DetailsList>
		);
	}
}

export default TaskDetails;
