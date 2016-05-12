import React, { Component } from 'react'
import classNames from 'classnames'



class GeneralInfo extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			isModal : false,
			confirmModal : false,
			inputText : "",
			className : "big-button big-red-button"
		}
	}

	handleOpenModal() {
		this.props.allActions.modalIsOpen()
		this.setState({
			isModal : !this.state.isModal,
			confirmModal : false,
			className : "big-button big-red-button"
		})
	}

	handleKeep() {
		this.setState({
			isModal : false,
			confirmModal : false,
			className : "big-button big-red-button"
		})
	}

	confirmRemove() {
		this.setState({
			confirmModal : true,
			className : "big-button confirmed-red-button"
		})
	}

	handleChange(event) {
		event.preventDefault()
		this.setState({
			inputText : event.target.value
		})
	}

	handleSubmit (event) {
		event.preventDefault()
		if(this.state.inputText !== "") {
			this.handleOpenModal()
			//back end call here
		} else {
			alert("You must list a reason for cancelling this program.")
		}
		// var userInfo = {
		// 	user              : this.props.person,
		// 	reasonsForRemoval : this.state.inputText,
		// }
		// $.post("/removeItem",userInfo,function (response) {
		// 	console.log(response.data)
		// })
	}

	runProgram() {
		if(this.props.wholeState.role === "marketer"){
			console.log("Start: Marketer")
		} else if (this.props.wholeState.role === "customer"){
			console.log('Start: Customer')
		} else {
			console.log('Start: Other')
		}
		// $.get("/runProgram",function (response) {
		// 	console.log(response.data)
		// })
	}

	cancelProgram() {
		if(this.props.wholeState.role === "marketer"){
			console.log("Cancel: Marketer")
		} else if (this.props.wholeState.role === "customer"){
			console.log('Cancel: Customer')
		} else {
			console.log('Cancel: Other')
		}
		// $.get("/cancelProgram",function (response) {
		// 	console.log(response.data)
		// })
	}


	render() {

		let buttonRun = this.props.wholeState.role === "marketer" ? "Run This Program" : "Run Program: Customer"

		let buttonCancel = this.props.wholeState.role === "marketer" ? "Cancel This Program" : "Cancel Program: Customer"
		
		let programInfo = this.props.wholeState.programInfo

		let numStr = function (num) {
			var numStrArr = num.toString().split("")
			for(var i = numStrArr.length; i >=0; i -= 3) {
				if(numStrArr[i+1] && i !== 0) {
					numStrArr.splice(i, 0, ",")
				}
			}
			if(num === programInfo.budget) {
				numStrArr.splice(0, 0, '$')
			}
			return numStrArr.join("")
		}
		let reach = numStr(programInfo.estimated_total_reach)
		let budget = numStr(programInfo.budget)

		let display = this.state.isModal ? "" : "none"

		let secondaryDisplay = this.state.confirmModal ? {
				display : "",
			} : {
				display : "none",
			}

		

		return  <div className="text-align-center margin-bottom-someMore vertical-align-top">
					<div>
						<div className="width-twenty-five-percent display-inline-block program-header"></div>
						<div className="width-twenty-five-percent display-inline-block program-header">
							<h5>Program Budget</h5>
							<h1 className="make-smaller-font-when-small">{budget}</h1>
							<p className="program-budget-text">The actual program may be a little under this amount.</p>
						</div>
						<div className="width-twenty-five-percent display-inline-block program-header">
							<h5>Estimated Total Reach</h5>
							<h1 className="make-smaller-font-when-small">{reach}</h1>
						</div>
						<div className="width-twenty-five-percent display-inline-block program-header">
							<button onClick={this.runProgram.bind(this)} className="big-button big-red-button-no-expand text-align-center display-inline-block">{buttonRun}</button>
						</div>
					</div>
					
					
					
					

					<div className="modal-outer"  style={{display}}>
						<div className="modal-inner">
							<div className="modal-top">
								<p className="display-inline-block">Cancel Program</p><button className="position-absolute top-1-rem right-1-rem remove-border text-align-right" onClick={this.handleOpenModal.bind(this)}>X</button>
							</div>
							<div className="modal-padding text-align-center">
								<h3>Are you sure you want to cancel this program?</h3>
								<button className="big-button big-red-button margin-right-little" onClick={this.handleOpenModal.bind(this)}>No, do not cancel!</button><br className="display-none-when-large"/><br className="display-none-when-large"/><button  className={this.state.className} onClick={this.confirmRemove.bind(this)}>Yes, cancel this program</button>
							</div>
							<form className="modal-form" style={secondaryDisplay} onSubmit={this.handleSubmit.bind(this)}>
								<p>Why would you like to cancel this program?</p>
								<textarea rows="4" className="textbox-width" placeholder="List your reasons here..." onChange={this.handleChange.bind(this)}></textarea><br></br>
								<input className="big-button big-red-button" type="submit" value="Submit"/>
							</form>
						</div>
					</div>
					
				</div>
	
	}
}

export default GeneralInfo