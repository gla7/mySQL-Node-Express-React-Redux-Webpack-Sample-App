import React, { Component } from 'react'
import Person from './Person'
import classNames from 'classnames'




class InfoItems extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			isModal : false,
		}
	}

	triggerModal() {
		this.setState({
			isModal : true,
		})
	}

	render() {


		return  <div className="margin-bottom-some">
					<h5 className="color-gray">Possible influencers we've chosen for your program</h5>
					<ul className="influencer-list">
						{
							this.props.wholeState.influencers.map((person) => {
								return <Person allActions={this.props.allActions} key={person.id} person={person} wholeState={this.props.wholeState}/>
							})
						}
					</ul>
				</div>


	}
}

export default InfoItems