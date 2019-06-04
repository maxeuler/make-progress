import React, { Component } from 'react';
import { Form } from './ProgressForm';

class TaskForm extends Component {
	render() {
		return (
			<Form method="POST">
				<label htmlFor="title">
					Title
					<input type="text" name="title" placeholder="Read 'Harry Potter'" />
				</label>
				<label htmlFor="unitType">
					Which Unit?
					<input type="text" name="unitType" placeholder="Chapters" />
				</label>
				<label htmlFor="units">
					How many Units?
					<input type="number" name="units" placeholder="12" />
				</label>
				<button type="submit">Create</button>
			</Form>
		);
	}
}

export default TaskForm;
