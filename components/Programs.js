import React, { Component } from 'react'
import classNames from 'classnames'



class Programs extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			showForm : false,
			programName : '',
			programDescription : '',
			programBudget : 0,
		}
	}

	handleNewProgram () {
		this.setState({
			showForm: !this.state.showForm
		})
	}

	handleProgramNameChange (event) {
		event.preventDefault()
		this.setState({
			programName : event.target.value
		})
	}

	handleProgramDescriptionChange (event) {
		event.preventDefault()
		this.setState({
			programDescription : event.target.value
		})
	}

	handleProgramBudgetChange (event) {
		event.preventDefault()
		this.setState({
			programBudget : event.target.value
		})
	}

	handleSubmit () {
		console.log("Program Name:",this.state.programName)
		console.log("Program Description:",this.state.programDescription)
		console.log("Program Budget:",this.state.programBudget)

		// let payload = {
		// 	program_name : this.state.programName,
		// 	program_description : this.state.programDescription,
		// 	program_budget : this.state.programBudget
		// }

		fetch( "/addProgram", {
			method: 'POST',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: JSON.stringify({
				program_name : this.state.programName,
				program_description : this.state.programDescription,
				program_budget : this.state.programBudget
			}),
		}).then((response) => {
			if ( response.status === 200 ) {
				return response.json()
					.then((data) => {
					console.log(data)
				})
			} else {
				alert("Error!")
				console.log(response)
			}
		});
	}

	render() {

		let formStyle = this.state.showForm ? { display : ''} : {display : 'none'}

		let createOrHideProgram = this.state.showForm ? 'Hide this form' : 'Create new Program!'

		return  <div className='fiftyPxIndentation'>
					<h1>Welcome to the Programs Page!</h1>
					<p>Here you will be able to add new programs, edit existing programs, delete programs, and more. Feel free to play around:</p>
					<button className='buttonStyle' onClick={this.handleNewProgram.bind(this)}>{createOrHideProgram}</button>
					<br></br>
					<br></br>
					<form style={formStyle} onSubmit={this.handleSubmit.bind(this)}>
						<input type='text' placeholder="Program Name" onChange={this.handleProgramNameChange.bind(this)}/><br></br>
						<input type='text' placeholder="Program Description" onChange={this.handleProgramDescriptionChange.bind(this)}/><br></br>
						<input type='number' placeholder="Program Budget" onChange={this.handleProgramBudgetChange.bind(this)}/><br></br><br></br>
						<input className='buttonStyle' type='submit'/>
					</form>
				</div>
				
	}
}

export default Programs