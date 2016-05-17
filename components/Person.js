import React, { Component } from 'react'
import classNames from 'classnames'
import Modal from './Modal'

//removed this:
// <h6 className="blog-name"><a href={this.props.person.website_url}>{blogNameDisplay(this.props.person.influencer_title)}</a></h6>
// 		{
// 			this.props.person.platforms.map((platform) => {
// 				return (<div className="flavicon-div" key={platform.platform_id}><a href={platform.social_network_url} className="social-networks-info"><i className={whatFlavicon(platform.social_network_type)}></i><p className="followers">{followersDisplay(platform.followers)}</p></a></div>)

// 			})
// 		}
//also removed
// <Modal person={this.props.person} allActions={this.props.allActions} wholeState={this.props.wholeState}/>

class Person extends Component {

	render() {
		let picStyle = {
			backgroundImage : "url(" + this.props.person.picture_url + ")",
			backgroundSize  : "cover",
			backgroundPosition : "center center",
			margin:"auto",
			border:"2px solid white",
			top:"4rem",
			left:"0.45rem",
			height : "120px",
			width : "120px",
			borderRadius: "50%",
			position:"relative",
			backgroundColor:"white",
			padding:"1px",
		}

		let backgroundPhoto = (this.props.person.influencer_last_post_photo_url === "" || !this.props.person.influencer_last_post_photo_url) ? "https://hoursofidleness.files.wordpress.com/2012/06/gray-card.jpg" : this.props.person.influencer_last_post_photo_url

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
		}

		let whatFlavicon = function (socialMediaType) {
			if (socialMediaType === "Facebook") {
				return "fa fa-facebook-square"
			} else if (socialMediaType === "Twitter") {
				return "fa fa-twitter-square"
			} else if (socialMediaType === "Instagram") {
				return "fa fa-instagram"
			} else if (socialMediaType === "Pinterest") {
				return "fa fa-pinterest-square"
			} else if (socialMediaType === "Google+") {
				return "fa fa-google-plus-square"
			} else if (socialMediaType === "YouTube") {
				return "fa fa-youtube-square"
			} else if (socialMediaType === "Vine") {
				return "fa fa-vine"
			} else if (socialMediaType === "Blog") {
				return "fa fa-bookmark"
			}
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

		let followersDisplay = function (followers) {
			if (followers >= 1000000) {
				if ((followers/1000000).toFixed(1).toString()[(followers/1000000).toFixed(1).toString().length - 1] === "0") {
					return Math.round(followers/1000000).toString() + "M" 
				} else {
					return (followers/1000000).toFixed(1).toString() + "M" 
				}
			} else if (followers >= 1000 && followers < 1000000) {
				if ((followers/1000).toFixed(1).toString()[(followers/1000).toFixed(1).toString().length - 1] === "0") {
					return Math.round(followers/1000).toString() + "K" 
				} else {
					return (followers/1000).toFixed(1).toString() + "K" 
				}
			} else {
				return followers
			}
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

		return  <li className="influencer">
					<div className="influencer-info">
						<div style={test}>
							<div style={picStyle}>				
							</div>
						</div>
						<div className="profile-info-influencer">
							<h5 className="padding-bottom-tiny font-size-1-rem"><a className="little-padding-left color-black" href={this.props.person.website_url}>{nameDisplay(this.props.person.influencer_full_name)}</a></h5>
							<h6 className="blog-name"><a className="little-padding-left" href={this.props.person.blog_url}>{blogNameDisplay(this.props.person.blog_name)}</a></h6>
							<div className="view-and-engagement-wrapper">
								<hr></hr>
								<i className="little-padding-left fa fa-eye color-gray" aria-hidden="true"></i><span className="font-size-tiny">&nbsp;{numStr(this.props.person.views)}</span>
								<i className="little-padding-left fa fa-thumbs-up color-gray" aria-hidden="true"></i><span className="font-size-tiny">&nbsp;{numStr(this.props.person.engagement)}</span>
							</div>
						</div>
					</div>
				</li>

	} 

}

export default Person