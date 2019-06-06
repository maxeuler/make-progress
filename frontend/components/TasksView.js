import React, { Component } from 'react';
import axios from 'axios';
import Tasklist from '../components/Tasklist';
import TaskForm from '../components/TaskForm';

class TasksView extends Component {
	state = {
		tasks: []
	};

	async componentDidMount() {
		const res = await axios.get('http://localhost:8888/api/tasks');
		this.setState(prevState => ({ tasks: [...prevState.tasks, ...res.data] }));
	}

	render() {
		return (
			<>
				<TaskForm />
				<Tasklist tasks={this.state.tasks} />
			</>
		);
	}
}

export default TasksView;
