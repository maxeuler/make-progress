import React, { Component } from 'react';

import Task from './Task';

class Tasklist extends Component {
	render() {
		return (
			<div>
				{this.props.tasks.map(task => (
					<Task key={task._id} task={task} />
				))}
			</div>
		);
	}
}

export default Tasklist;
