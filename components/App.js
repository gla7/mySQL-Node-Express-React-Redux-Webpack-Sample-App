import React, { Component } from 'react'
import GeneralInfo from './GeneralInfo'
import InfoItems from './InfoItems'
import Person from './Person'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import classNames from 'classnames'
import Overview from './Overview'


class App extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			isModal : false,
			confirmModal : false,
			className : "big-button big-red-button",
			cancelReason : ""
		}
	}

	handleOpenModal() {
		this.props.actions.modalIsOpen()
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
			cancelReason : event.target.value
		})
	}

	handleClick(event){
		event.preventDefault()
		this.props.actions.changePage(event.target.value)
	}

	handleSubmit(event) {
		event.preventDefault()
		if(this.state.cancelReason !== "") {
			this.handleOpenModal()
			console.log('Program Cancelled!')
			//back end call here
		} else {
			alert("You must list a reason for cancelling this program.")
		}
	}
	
	render () {
		console.log(this.props)
		let imgStyle = {
			width : "150px",
			height : "auto"
		}
		let programInfo = this.props.wholeStatus.programInfo
		let currentPage = <div></div>

		if(this.props.wholeStatus.currentPage === "Configuration") {
			currentPage = <div>Configuration!</div>
		} else if (this.props.wholeStatus.currentPage === "Content") {
			currentPage = <div>Content!</div>
		} else if (this.props.wholeStatus.currentPage === "Analytics") {
			currentPage = <div>Analytics!</div>
		} else {
			currentPage = <Overview wholeState={this.props.wholeStatus} allActions={this.props.actions} />
		}

		let display = this.state.isModal ? "" : "none"

		let secondaryDisplay = this.state.confirmModal ? {
			display : "",
		} : {
			display : "none",
		}

		console.log(this)

		let overviewStyle = {}
		let configStyle = {}
		let contentStyle = {}
		let analyticsStyle = {}

		let activeStyle = {
			borderTop : "3px solid #FF5770"
		}

		let inactiveStyle = {
			color : "#999A9B !important"
		}

		let currentLocation = this.props.wholeStatus.currentPage

		if(currentLocation === "Overview") {
			overviewStyle = activeStyle
			// configStyle = inactiveStyle
			// contentStyle = inactiveStyle
			// analyticsStyle = inactiveStyle
		} else if (currentLocation === "Configuration"){
			configStyle = activeStyle
			// overviewStyle = inactiveStyle
			// contentStyle = inactiveStyle
			// analyticsStyle = inactiveStyle
		} else if(currentLocation === "Content") {
			contentStyle = activeStyle
			// configStyle = inactiveStyle
			// overviewStyle = inactiveStyle
			// analyticsStyle = inactiveStyle
		} else if(currentLocation === "Analytics") {
			analyticsStyle = activeStyle
			// configStyle = inactiveStyle
			// contentStyle = inactiveStyle
			// overviewStyle = inactiveStyle
		}




		return ( 
			<div className="client-platform-class">
				<div className="display-inline-block program-info logo">
					<img style={imgStyle} src={programInfo.photo_url}/>
				</div>
				<div className="display-inline-block program-info">
					<h2>{programInfo.title}</h2>
					<ul className="text-align-left no-padding-left">
						<li className="display-inline-block nav-bar" style={overviewStyle}><button onClick={this.handleClick.bind(this)} value="Overview" className="remove-border">Overview</button></li>
						<li className="display-inline-block nav-bar" style={configStyle}><button onClick={this.handleClick.bind(this)} value="Configuration" className="remove-border">Configuration</button></li>
						<li className="display-inline-block nav-bar" style={contentStyle}><button onClick={this.handleClick.bind(this)} value="Content" className="remove-border">Content</button></li>
						<li className="display-inline-block nav-bar" style={analyticsStyle}><button onClick={this.handleClick.bind(this)} value="Analytics" className="remove-border">Analytics</button></li>
					</ul>
					<button onClick={this.handleOpenModal.bind(this)} className="cancel-button color-gray">Cancel Program <span className="xButton">X</span></button>
				</div>
				{currentPage}

				<div className="app-modal-outer" style={{display}}>
					<div className="app-modal-inner">
						<div className="modal-top">
							<p className="display-inline-block">Cancel Program</p><button className="position-absolute top-1-rem right-1-rem remove-border text-align-right" onClick={this.handleOpenModal.bind(this)}>X</button>
						</div>
						<div className="modal-padding text-align-center">
							<h3>Are you sure you want to cancel this program?</h3>
							<button className="big-button big-red-button margin-right-little" onClick={this.handleOpenModal.bind(this)}>No, do not cancel!</button><br className="display-none-when-large"/><br className="display-none-when-large"/><button  className={this.state.className} onClick={this.confirmRemove.bind(this)}>Yes, cancel this program</button>
						</div>
						<div>
							<form className="modal-form" style={secondaryDisplay} onSubmit={this.handleSubmit.bind(this)}>
								<p>Why would you like to cancel this program?</p>
								<textarea rows="4" className="textbox-width" placeholder="List your reasons here..." onChange={this.handleChange.bind(this)}></textarea><br></br>
								<input className="big-button big-red-button" type="submit" value="Submit"/>
							</form>
						</div>
					</div>
				</div>

				

			</div>
		)

	}

}

function mapStateToProps(state) {
	return {
		wholeStatus: state
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
