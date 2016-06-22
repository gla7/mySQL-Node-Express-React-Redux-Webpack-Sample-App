import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import classNames from 'classnames'
import Influencers from './Influencers'
import Programs from './Programs'
import Analytics from './Analytics'


class App extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			sample:"sample"
		}
	}

	handleClick(event){
		event.preventDefault()
		if ( event.target.value === "Analytics" ) {
			this.props.actions.changeTab("Analytics")
		} else if ( event.target.value === "Programs" ) {
			this.props.actions.changeTab("Programs")
		} else if ( event.target.value === "Influencers" ) {
			this.props.actions.changeTab("Influencers")
		} else {
			this.props.actions.changeTab("Something Else")
		}
	}
	
	render () {

		let navbarDisplay = {
			borderBottom : "solid 1px black"
		}

		let tapDisplay = {
			display : "inline-block",
		}

		let ulDisplay = {
			display : "inline-block",
			listStyleType: "none",
			position : "absolute",
    		right : "30%"
		}

		let liDisplay = {
			display : "inline-block",
			padding : "15px"
		}

		let tabDisplay = {
			border: "none",
			backgroundColor: "white",
			display: "inline-block",
		}

		let self = this

		function whatTab ( state ) {
			if ( state === "Influencers" ) {
				return (<Influencers wholeState={self.props.wholeState} allActions={self.props.allActions}/>)
			} else if ( state === "Programs" ) {
				return (<Programs wholeState={self.props.wholeState} allActions={self.props.allActions}/>)
			} else if ( state === "Analytics" ) {
				return (<Analytics wholeState={self.props.wholeState} allActions={self.props.allActions}/>)
			} else {
				return (<h1>SOMETHING ELSE!!!</h1>)
			}
		}

		let tapLogo = "http://www.tapinfluence.com/wp-content/uploads/2015/09/tapinfluence_logo.png"

		return (
			<div>
				<div style={navbarDisplay}>
					<img style={tapDisplay} src={tapLogo}/>
					<ul style={ulDisplay}>
						<li style={liDisplay}><button onClick={this.handleClick.bind(this)} value="Influencers" style={tabDisplay}>Influencers</button></li>
						<li style={liDisplay}><button onClick={this.handleClick.bind(this)} value="Programs" style={tabDisplay}>Programs</button></li>
						<li style={liDisplay}><button onClick={this.handleClick.bind(this)} value="Analytics" style={tabDisplay}>Analytics</button></li>
					</ul>
				</div>
				<br></br>
				<br></br>
				<br></br>
				{whatTab(this.props.wholeStatus.tab)}
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
