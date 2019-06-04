import React, { Component } from 'react';

class ProgressForm extends Component {
	submit = e => {
		e.preventDefault();
		this.props.addTask();
	};
	render() {
		return (
			<form action="" onSubmit={this.submit}>
				<fieldset>
					<label htmlFor="title">
						Title
						<input type="text" />
					</label>
					<button type="submit">ADD</button>
				</fieldset>
			</form>
		);
	}
}

export default ProgressForm;
