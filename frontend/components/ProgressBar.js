import React, { Component } from 'react';
import styled from 'styled-components';

const SytledProgressBar = styled.div`
	display: block;
	width: 90%;
	height: 40px;
	background: ${props => props.theme.bright};
	border-radius: 4px;
`;

const InnerBar = styled.div`
	height: 100%;
	border-radius: 4px;
	background: #c0392b;
`;

class ProgressBar extends Component {
	render() {
		const { finishedUnits, units } = this.props;
		return (
			<SytledProgressBar>
				<InnerBar
					style={{
						width: `${(finishedUnits / units) * 100}%`,
						background: `${finishedUnits === units ? '#27ae60' : '#c0392b'}`
					}}
				/>
			</SytledProgressBar>
		);
	}
}

export default ProgressBar;
