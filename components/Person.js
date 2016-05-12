import React, { Component } from 'react'
import classNames from 'classnames'
import Modal from './Modal'


class Person extends Component {

	render() {
		let picStyle = {
			top:"2.5rem",
			left:"0.25rem",
			height : "80px",
			width : "80px",
			borderRadius: "50%",
			position:"relative",
			backgroundColor:"white",
			padding:"1px",
		}

		let backgroundPhoto = (this.props.person.influencer_last_post_photo_url === "" || !this.props.person.influencer_last_post_photo_url) ? "https://hoursofidleness.files.wordpress.com/2012/06/gray-card.jpg" : this.props.person.influencer_last_post_photo_url

		let test = {
			backgroundImage : "url(" + backgroundPhoto + ")",
			backgroundSize  : "100% 100%",
			textAlign:"center", 
			display: "block",
			verticalAlign:"top", 
			paddingTop:"1.8rem", 
			paddingRight:"1rem",
			margin: "auto",
			marginBottom : "2rem",
			width: "80%",
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
			if (followers >= 1000) {
				return (followers/1000).toString() + "K" 
			} else {
				return followers
			}
		}

		return  <li className="influencer">
					<div className="influencer-info">
						<div style={test}>
							<img style={picStyle} src={this.props.person.influencer_photo_url}/>
						</div>
						<div className="profile-info-influencer">
							<h5 className="padding-bottom-tiny font-size-2-rem"><a className="color-black" href={this.props.person.website_url}>{nameDisplay(this.props.person.influencer_full_name)}</a></h5>
							<h6 className="blog-name"><a href={this.props.person.website_url}>{blogNameDisplay(this.props.person.influencer_title)}</a></h6>
								{
									this.props.person.platforms.map((platform) => {
										return (<div className="flavicon-div" key={platform.platform_id}><a href={platform.social_network_url} className="social-networks-info"><i className={whatFlavicon(platform.social_network_type)}></i><p className="followers">{followersDisplay(platform.followers)}</p></a></div>)

									})
								}
						

						</div>
					</div>
					<Modal person={this.props.person} allActions={this.props.allActions} wholeState={this.props.wholeState}/>
				</li>

	} 

}

export default Person