import React, { Component } from 'react';

import Task from './Task';

class Tasklist extends Component {
	render() {
		return (
			<div style={{ margin: '4rem 0' }}>
				{this.props.tasks.map(task => (
					<Task key={task._id} task={task} />
				))}
			</div>
		);
	}
}

export default Tasklist;
