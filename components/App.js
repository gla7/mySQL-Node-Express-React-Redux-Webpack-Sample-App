import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import classNames from 'classnames'
import Influencers from './Influencers'
import Programs from './Programs'
import Analytics from './Analytics'
import { Link } from 'react-router'


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

		let activeLinkStyle = {
			textDecoration : 'none',
			color : 'black',
			fontWeight: 'bold',
		}

		let inactiveLinkStyle = {
			textDecoration : 'none',
			color : 'black',
		}

		return (
			<div>
				<div style={navbarDisplay}>
					<Link to='/'><img style={tapDisplay} src={tapLogo}/></Link>
					<ul style={ulDisplay}>
						<li style={liDisplay}><Link style={inactiveLinkStyle} activeStyle={activeLinkStyle} to='/programs'>Programs</Link></li>
						<li style={liDisplay}><Link style={inactiveLinkStyle} activeStyle={activeLinkStyle} to='/influencers'>Influencers</Link></li>
						<li style={liDisplay}><Link style={inactiveLinkStyle} activeStyle={activeLinkStyle} to='/analytics'>Analytics</Link></li>
					</ul>
				</div>
				<br></br>
				<br></br>
				<br></br>
				{this.props.children}
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
