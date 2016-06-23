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
			programs: [],
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
		fetch( "/addProgram", {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
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

		document.getElementById('programNameInput').value = ''
		document.getElementById('programDescriptionInput').value = ''
		document.getElementById('programBudgetInput').value = ''

		this.handleNewProgram()
		this.componentDidMount()
	}

	editProgramName (item) {
		var confirmChange = confirm("Are you sure you wish to change the program name of " + item.program_name + "?")
		if ( confirmChange === true ) {
			var newName = prompt("What name would you like to re-name this program to?")
			fetch( "/editProgramName", {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					program_name : newName,
					program_id : item.program_id
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
			this.componentDidMount()
		} 
	}

	editProgramDescription (item) {
		var confirmChange = confirm("Are you sure you wish to change the program description of " + item.program_name + "?")
		if ( confirmChange === true ) {
			var newDescription = prompt("How would you like to re-describe this program?")
			fetch( "/editProgramDescription", {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					program_description : newDescription,
					program_id : item.program_id
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
			this.componentDidMount()
		}
	}

	editProgramBudget (item) {
		var confirmChange = confirm("Are you sure you wish to change the program budget of " + item.program_name + "?")
		if ( confirmChange === true ) {
			var newBudget = prompt("What would you like the new budget to be?")
			fetch( "/editProgramBudget", {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					program_budget : newBudget,
					program_id : item.program_id
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
			this.componentDidMount()
		}
	}

	deleteProgram (item) {
		fetch( "/deleteProgram", {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				program_name : item.program_name,
				program_description : item.program_description,
				program_budget : item.program_budget
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
		this.componentDidMount()
	}

	componentDidMount () {
		fetch( "/getPrograms", {
			method: 'GET',
		}).then((response) => {
			if ( response.status === 200 ) {
				response.json()
					.then((data) => {
					console.log("PROGRAMS:",data)
					this.setState({
						programs : data
					})
				})
			} else {
				alert("Error!")
				console.log(response)
			}
		});
	}

	render() {

		let programsDisplayed = (<div>
									<table>
										<tbody>
											<tr>
												<td className="boldFace">ID</td>
												<td className="boldFace">Name</td>
												<td>Edit Name</td>
												<td className="boldFace">Description</td>
												<td>Edit Description</td>
												<td className="boldFace">Budget</td>
												<td>Edit Budget</td>
												<td className="boldFace">Delete Program</td>
											</tr>
											{this.state.programs.map(item => {
												return (<tr key={item.program_description}>
															<td className="boldFace">{item.program_id}</td>
															<td>{item.program_name}</td>
															<td><button className='buttonStyle' onClick={() => this.editProgramName(item)}>E</button></td>
															<td>{item.program_description}</td>
															<td><button className='buttonStyle' onClick={() => this.editProgramDescription(item)}>E</button></td>
															<td>${item.program_budget}</td>
															<td><button className='buttonStyle' onClick={() => this.editProgramBudget(item)}>E</button></td>
															<td><button className='buttonStyle' onClick={() => this.deleteProgram(item)}>X</button></td>
														</tr>)
											})}
										</tbody>
									</table>
								</div>)

		let formStyle = this.state.showForm ? { display : ''} : {display : 'none'}

		let createOrHideProgram = this.state.showForm ? 'Hide this form' : 'Create new Program!'

		return  <div className='fiftyPxIndentation'>
					<h1>Welcome to the Programs Page!</h1>
					<p>Here you will be able to add new programs, edit existing programs, delete programs, and more. Feel free to play around:</p>
					<button className='buttonStyle' onClick={this.handleNewProgram.bind(this)}>{createOrHideProgram}</button>
					<br></br>
					<br></br>
					<form style={formStyle} onSubmit={this.handleSubmit.bind(this)}>
						<input id="programNameInput" type='text' placeholder="Program Name" onChange={this.handleProgramNameChange.bind(this)}/><br></br>
						<input id="programDescriptionInput" type='text' placeholder="Program Description" onChange={this.handleProgramDescriptionChange.bind(this)}/><br></br>
						<input id="programBudgetInput" type='number' placeholder="Program Budget" onChange={this.handleProgramBudgetChange.bind(this)}/><br></br><br></br>
						<input className='buttonStyle' type='submit'/>
					</form>
					{programsDisplayed}
				</div>
				
	}
}

export default Programs