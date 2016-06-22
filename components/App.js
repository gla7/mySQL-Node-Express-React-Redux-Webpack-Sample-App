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
	
	render () {

		let tapLogo = "http://www.tapinfluence.com/wp-content/uploads/2015/09/tapinfluence_logo.png"

		let activeLinkStyle = {
			textDecoration : 'none',
			color : 'black',
			fontWeight: 'bold',
		}

		return (
			<div>
				<div className='navbarDisplay'>
					<Link to='/'><img className='tapDisplay' src={tapLogo}/></Link>
					<ul className='ulDisplay'>
						<li className='liDisplay'><Link className='inactiveLinkStyle' activeStyle={activeLinkStyle} to='/programs'>Programs</Link></li>
						<li className='liDisplay'><Link className='inactiveLinkStyle' activeStyle={activeLinkStyle} to='/influencers'>Influencers</Link></li>
						<li className='liDisplay'><Link className='inactiveLinkStyle' activeStyle={activeLinkStyle} to='/analytics'>Analytics</Link></li>
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
