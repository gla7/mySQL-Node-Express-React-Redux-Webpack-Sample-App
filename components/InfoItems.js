import React, { Component } from 'react'
import Person from './Person'
import classNames from 'classnames'


// IMPORTANT!!!!! IMPLEMENT THIS FOR SORTING FIRST THING MONDAY: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

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

		// let textAboveDividerLine = (this.props.wholeState.role != "cst") ? "POSSIBLE INFLUENCERS WE'VE CHOSEN FOR YOUR PROGRAM" : "INFLUENCER REVIEW"

		let sorted = this.props.wholeState.influencers.sort(function (a, b) {
		  	if (a.influencer_total_reach > b.influencer_total_reach) {
		    return 1;
		}
		  	if (a.influencer_total_reach < b.influencer_total_reach) {
		    return -1;
	    }
		    // a must be equal to b
		    return 0;
		})

		return  <div className="margin-bottom-some">
					<h5 className="color-gray">TOP PERFORMING CONTENT</h5>
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