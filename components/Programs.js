import React, { Component } from 'react'
import classNames from 'classnames'



class Programs extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			sample : "sample"
		}
	}

	render() {

		return  <div className='fiftyPxIndentation'>
					<h1>Welcome to the Programs Page!</h1>
					<p>Here you will be able to add new programs, edit existing programs, delete programs, and more. Feel free to play around:</p>
				</div>
				
	}
}

export default Programs