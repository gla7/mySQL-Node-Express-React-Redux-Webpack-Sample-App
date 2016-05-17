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
// 						<p>{topDog.blog_name}</p>
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

		let allInfluencers = this.props.wholeState.roi.roi.influencers.sort(function (a, b) {
		  	if (a.engagement > b.engagement) {
		    return -1;
		}
		  	if (a.engagement < b.engagement) {
		    return 1;
	    }
		    return 0;
		})

		let topDog = allInfluencers[0]

		let rest = [allInfluencers[1],allInfluencers[2],allInfluencers[3],allInfluencers[4],allInfluencers[5],allInfluencers[6]]

		// let spliceTopAndOthersFromRest = function () {
		// 	rest.splice(0,1)
		// 	for ( var i = 0; i < rest.length; i++) {
		// 		if ( i > 5 ) {
		// 			rest.splice(i,1)
		// 			i--
		// 		}
		// 	}
		// 	return rest
		// }

		// console.log(spliceTopAndOthersFromRest())

		let picStyle = {
			backgroundImage : "url(" + topDog.picture_url + ")",
			backgroundSize  : "cover",
			backgroundPosition : "center center",
			margin:"auto",
			border:"2px solid #FF0076",
			top:"13rem",
			left:"0.45rem",
			height : "150px",
			width : "150px",
			borderRadius: "50%",
			position:"relative",
			backgroundColor:"white",
			padding:"1px",
		}

		let backgroundPhoto = (topDog.influencer_last_post_photo_url === "" || !topDog.influencer_last_post_photo_url) ? "https://hoursofidleness.files.wordpress.com/2012/06/gray-card.jpg" : topDog.influencer_last_post_photo_url

		let test = {
			backgroundImage : "url(" + backgroundPhoto + ")",
			backgroundSize  : "cover",
			backgroundPosition : "center center",
			textAlign:"center", 
			display: "block",
			verticalAlign:"top", 
			paddingTop:"1.8rem", 
			paddingRight:"1rem",
			margin: "auto",
			marginBottom : "2rem",
			width: "80%",
			borderTopRightRadius:"0.2rem",
			borderTopLeftRadius:"0.2rem",
			minHeight:"18rem",
		}

		let numStr = function (num) {
			var numStrArr = num.toString().split("")
			for(var i = numStrArr.length; i >=0; i -= 3) {
				if(numStrArr[i+1] && i !== 0) {
					numStrArr.splice(i, 0, ",")
				}
			}
			return numStrArr.join("")
		}

		let nameDisplay = function (name) {
			if (name.length >= 20) {
				return name.substring(0,20) + "..."
			} else {
				return name
			}
		}

		let blogNameDisplay = function (blogName) {
			if (blogName.length >= 22) {
				return blogName.substring(0,22) + "..."
			} else {
				return blogName
			}
		}

		let moreContent = function () {
			console.log("More Content!")
		}

		return  <div>
					<h5 className="color-gray">TOP PERFORMING CONTENT</h5>
					<div className="border-top-gray-line text-align-center">
						<div className="top-influencer">
							<div className="influencer-info">
								<div style={test}>
									<div style={picStyle}>				
									</div>
								</div>
								<div className="profile-info-top-influencer">
									<h5 className="padding-bottom-tiny font-size-1-rem"><a className="little-padding-left color-black" href={topDog.website_url}>{nameDisplay(topDog.influencer_full_name)}</a></h5>
									<h6 className="blog-name"><a className="little-padding-left" href={topDog.blog_url}>{blogNameDisplay(topDog.blog_name)}</a></h6>
									<div className="big-padding-top view-and-engagement-wrapper">
										<hr></hr>
										<i className="little-padding-left fa fa-eye color-gray" aria-hidden="true"></i><span className="font-size-tiny">&nbsp;{numStr(topDog.views)}</span>
										<i className="little-padding-left fa fa-thumbs-up color-gray" aria-hidden="true"></i><span className="font-size-tiny">&nbsp;{numStr(topDog.engagement)}</span>
									</div>
								</div>
							</div>
						</div>
						<div className="rest-of-influencers">
							<ul className="influencer-list">
								{
									rest.map((person) => {
										return <Person allActions={this.props.allActions} key={person.influencer_uuid} person={person} wholeState={this.props.wholeState}/>
									})
								}
							</ul>
						</div>
					</div>
					<div className="text-align-right">
						<button className="remove-border font-color-pink font-weight-bolder" onClick={moreContent.bind(this)}>view all content</button>
					</div>
				</div>


	}
}

export default InfoItems