import React, { Component } from 'react'
import classNames from 'classnames'



class Influencers extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			sample : "sample"
		}
	}

	render() {

		return  <div className='fiftyPxIndentation'>
					<h1>Welcome to the Influencers Page!</h1>
					<p>Here you will be able to add new influencers, edit existing influencers, delete influencers, and more. Feel free to play around:</p>
				</div>

	}
}

export default Influencers