import React, { Component } from 'react'


class CreateTask extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '' };
	}

	handleChange = (event) => {
		this.setState({ task: event.target.value });
	}
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.CreateTask(this.state.task)
		this.setState({task:''})
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Create A Task" value={this.state.task} onChange={this.handleChange} autoFocus />
				<button className="submit" type="submit">Add Task</button>
			</form>
			)
	}
}
export default CreateTask