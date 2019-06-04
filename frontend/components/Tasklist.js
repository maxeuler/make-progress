import React, { Component } from 'react';

import Task from './Task';

class Tasklist extends Component {
	render() {
		return (
			<div>
				<Task />
				<Task />
			</div>
		);
	}
}

export default Tasklist;
