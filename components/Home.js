import React, { Component } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'



class Home extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			sample : "sample"
		}
	}

	render() {

		return  <div className='fiftyPxIndentation'>
					<h1>Welcome to this Sample App!</h1>
					<p>Please navigate through the links above to add/remove/edit programs and influencers and their metrics. You can then navigate to Analytics to see a visual representation of such metrics.</p>
					<button className='buttonStyle'><Link className='linkStyleInButton' to='/programs'>Take me to Programs!</Link></button>
				</div>
				
	}
}

export default Home