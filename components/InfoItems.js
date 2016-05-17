import React, { Component } from 'react'
import Person from './Person'
import classNames from 'classnames'

//took this out: 
// <ul className="influencer-list">
// 	{
// 		this.props.wholeState.influencers.map((person) => {
// 			return <Person allActions={this.props.allActions} key={person.id} person={person} wholeState={this.props.wholeState}/>
// 		})
// 	}
// </ul>

// DO SOMETHING LIKE THIS FIRST THING TOMORROW: MAKE TWO CONTAINERS, ONE WHERE YOU PUT YOUR TOP INFLUENCER AND ANOTHER WHERE YOU PUT THE REMAINING 6, I REMOVED THIS:
// <div className="margin-bottom-some">
// 					<h5 className="color-gray">TOP PERFORMING CONTENT</h5>
// 					<div className="top-influencer display-inline-block">
// 						<p>{sorted[0].blog_name}</p>
// 					</div>
// 					<div className="display-inline-block">
// 						<ul className="influencer-list">
// 							{
// 								this.props.wholeState.roi.roi.influencers.map((person) => {
// 									return <Person allActions={this.props.allActions} key={person.influencer_uuid} person={person} wholeState={this.props.wholeState}/>
// 								})
// 							}
// 						</ul>
// 					</div>
// 				</div>



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

		let sorted = this.props.wholeState.roi.roi.influencers.sort(function (a, b) {
		  	if (a.engagement > b.engagement) {
		    return -1;
		}
		  	if (a.engagement < b.engagement) {
		    return 1;
	    }
		    // a must be equal to b
		    return 0;
		})

		console.log(sorted[0].blog_name)

		return  <div className="margin-bottom-some">
					<h5 className="color-gray">TOP PERFORMING CONTENT</h5>
					<ul className="influencer-list">
						{
							this.props.wholeState.roi.roi.influencers.map((person) => {
								return <Person allActions={this.props.allActions} key={person.influencer_uuid} person={person} wholeState={this.props.wholeState}/>
							})
						}
					</ul>
				</div>


	}
}

export default InfoItems