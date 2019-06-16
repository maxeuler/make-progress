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

	createTask = async task => {
		const res = await axios.post('http://localhost:8888/api/createTask', {
			task
		});
		this.setState(prevState => ({ tasks: [...prevState.tasks, res.data] }));
	};

	deleteTask = async id => {
		this.setState(prevState => ({
			tasks: [...prevState.tasks.filter(task => task._id !== id)]
		}));
		const res = await axios.post('http://localhost:8888/api/delete', { id });
	};

	render() {
		return (
			<>
				<TaskForm createTask={this.createTask} />
				<Tasklist tasks={this.state.tasks} delete={this.deleteTask} />
			</>
		);
	}
}

export default TasksView;
