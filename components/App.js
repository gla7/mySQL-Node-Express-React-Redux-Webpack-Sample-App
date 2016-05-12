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

	handleClick(event){
		event.preventDefault()
		this.props.actions.changePage(event.target.value)
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

		

		return ( 
			<div className="client-platform-class">
				<div className="display-inline-block program-info">
					<img style={imgStyle} src={programInfo.photo_url}/>
				</div>
				<div className="display-inline-block program-info">
					<h2>{programInfo.title}</h2>
					<ul className="text-align-left no-padding-left">
						<li className="display-inline-block nav-bar"><button onClick={this.handleClick.bind(this)} value="Overview" className="remove-border">Overview</button></li>
						<li className="display-inline-block nav-bar"><button onClick={this.handleClick.bind(this)} value="Configuration" className="remove-border">Configuration</button></li>
						<li className="display-inline-block nav-bar"><button onClick={this.handleClick.bind(this)} value="Content" className="remove-border">Content</button></li>
						<li className="display-inline-block nav-bar"><button onClick={this.handleClick.bind(this)} value="Analytics" className="remove-border">Analytics</button></li>
					</ul>
					<button className="cancel-button">Cancel Program <span className="xButton">X</span></button>
				</div>
				{currentPage}
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
