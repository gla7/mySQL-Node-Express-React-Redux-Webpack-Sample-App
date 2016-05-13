import React, { Component } from 'react'
import classNames from 'classnames'


class Modal extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			isModal : false,
			confirmModal : false,
			inputSelection : "default",
			className : "big-button big-red-button"
		}
	}

	handleOpenModal() {
		console.log(this.props)
		this.setState({
			isModal : !this.state.isModal,
			confirmModal : false,
			className : "big-button big-red-button"
		})
		this.props.allActions.modalIsOpen()
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
			inputSelection : event.target.value
		})
	}

	handleSubmit (event) {
		event.preventDefault()
		if(this.state.inputSelection !== "default") {
			this.handleOpenModal()
			this.props.allActions.removePerson(this.props.person.id)
		} else {
			alert("You must list a reason for removing this person")
		}
		// var userInfo = {
		// 	user              : this.props.person,
		// 	reasonsForRemoval : this.state.inputSelection,
		// }
		// $.post("/removeItem",userInfo,function (response) {
		// 	console.log(response.data)
		// })
	}


	render() {
		let display = this.state.isModal ? "" : "none"
		let secondaryDisplay = this.state.confirmModal ? {
			display : "",
		} : {
			display : "none",
		}
		let selection = this.state.inputSelection
		let count = 0
		let modalText = this.props.wholeState.numberRemoved < 3 ? 
		(	<div className="modal-inner">
							<form className="modal-form" onSubmit={this.handleSubmit.bind(this)}>
								<p>Why would you like to remove {this.props.person.influencer_full_name}?</p>
								<select className="margin-bottom-some width-twenty-five-percent" value={selection} onChange={this.handleChange.bind(this)}>
									<option value="default">---</option>
									<option value="1">Reason 1</option>
									<option value="2">Reason 2</option>
									<option value="3">Reason 3</option>
								</select><br/>
								<input className="big-button big-red-button width-all" type="submit" value="Remove"/>
							</form>
							<br/>
							<button className="big-button big-red-button width-all" onClick={this.handleOpenModal.bind(this)}>Keep</button>
						</div>
		)
		: 	(<div className="modal-padding text-align-center"><h3>You can only remove 3 people</h3>
					<button className="big-button big-red-button width-all" onClick={this.handleOpenModal.bind(this)}>Close This Box</button></div>
			)
		return  <div className="modal">
					<div className="remove-influencer"><button className="remove-border font-color-pink font-weight-bolder" disabled={this.props.wholeState.isModalOpen} onClick={this.handleOpenModal.bind(this)}>Remove influencer X</button></div>
					<div className="modal-outer"  style={{display}}>
						{modalText}
						
					</div>
				</div>

	}
}

export default Modal