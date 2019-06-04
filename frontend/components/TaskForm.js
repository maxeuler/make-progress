import React, { Component } from 'react';

class TaskForm extends Component {
	render() {
		return (
			<form action="">
				<fieldset>
					<label htmlFor="title">
						Title
						<input type="text" />
					</label>
				</fieldset>
			</form>
		);
	}
}

export default TaskForm;
