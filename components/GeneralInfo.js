import React, { Component } from 'react'
import classNames from 'classnames'
import StarRatingComponent from 'react-star-rating-component'
import Star from "./Star"



class GeneralInfo extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			isModal : false,
			confirmModal : false,
			inputText : "",
			className : "big-button big-red-button",
			rating : 0,
			cancelReason : "",



			//new stuff
			hoverAt: null,
		}
	}



	//new star rating stuff
	handleMouseOver(idx, evt){
    	this.state.hoverAt = idx + 1;
        this.forceUpdate();
    }
    handleMouseOut(idx, evt){
    	this.state.hoverAt = null;
        this.forceUpdate();
    }
    handleClick(idx, evt){
        this.state.rating = idx + 1;
        this.forceUpdate();
        console.log('clicked');
    }
	//new star rating stuff



	handleOpenModal() {
		this.props.allActions.modalIsOpen()
		this.setState({
			isModal : !this.state.isModal,
			confirmModal : false,
			className : "big-button big-red-button"
		})
	}

	handleKeep() {
		this.setState({
			isModal : false,
			confirmModal : false,
			className : "big-button big-red-button"
		})
	}

	confirmRemove() {
		this.setState({
			confirmModal : true,
			className : "big-button confirmed-red-button"
		})
	}

	handleChange(event) {
		event.preventDefault()
		this.setState({
			cancelReason : event.target.value
		})
	}

	// onStarClick(event) {
	// 	this.setState({
	// 		rating : event
	// 	})
		
	// }

	handleSubmit (event) {
		event.preventDefault()
		if(this.state.rating < 3) {
			if(this.state.cancelReason.length < 1) {
				alert("You must provide a reason for cancelling this program")
			} else {
				console.log('Program Cancelled')
			}
		} else {
			console.log('Program Sent to Customer')
		}
		if(this.state.inputText !== "") {
			this.handleOpenModal()
			//back end call here
		} else {
			alert("You must list a reason for cancelling this program.")
		}
		// var userInfo = {
		// 	user              : this.props.person,
		// 	reasonsForRemoval : this.state.inputText,
		// }
		// $.post("/removeItem",userInfo,function (response) {
		// 	console.log(response.data)
		// })
	}

	runProgram() {
		if(this.state.rating < 3) {
			if(this.state.cancelReason.length < 1) {
				alert("You must provide a reason for cancelling this program")
			} else {
				console.log('Program Cancelled')
			}
		} else {
			console.log('Program Sent to Customer')
		}
		// if(this.props.wholeState.role === "cst"){
		// 	console.log("Start: Customer Success")
		// } else if (this.props.wholeState.role === "customer"){
		// 	console.log('Start: Customer')
		// } else {
		// 	console.log('Start: Other')
		// }
		// $.get("/runProgram",function (response) {
		// 	console.log(response.data)
		// })
	}

	render() {

		//new star rating stuff

		let stars = [];
        for (var i = 0 ; i < 5; i++){
        	var rating = this.state.hoverAt != null ? this.state.hoverAt : this.state.rating;
        	var selected = (i < rating);
          let style = {
          	color:"#FF5770",
          }
        	stars.push(
            <Star style={style} key={i} selected={selected}
            	  onMouseOver={this.handleMouseOver.bind(this, i)}
              	  onMouseOut={this.handleMouseOut.bind(this, i)}
                  onClick={this.handleClick.bind(this, i)}/>
                  );
        }

		//new star rating stuff
		

		// let buttonRun = ""


		// if(this.props.wholeState.role === "cst") {
		// 	if(this.state.rating === 0) {
		// 		buttonRun = "A Rating Must Be Entered"
		// 	} else if(this.state.rating > 0 && this.state.rating < 3) {
		// 		buttonRun = "Cancel Program"
		// 	} else {
		// 		buttonRun = "Send Program To Customer"
		// 	}
		// } else {
		// 	buttonRun = "Run This Program"
		// }

		let moreAnalytics = function () {
			console.log("More Analytics!")
		}
		
		let programInfo = this.props.wholeState.programInfo

		let numStr = function (num) {
			var numStrArr = num.toString().split("")
			for(var i = numStrArr.length; i >=0; i -= 3) {
				if(numStrArr[i+1] && i !== 0) {
					numStrArr.splice(i, 0, ",")
				}
			}
			if(num === programInfo.budget) {
				numStrArr.splice(0, 0, '$')
			}
			return numStrArr.join("")
		}
		let reach = numStr(programInfo.estimated_total_reach)
		let budget = numStr(programInfo.budget)

		let display = this.state.isModal ? "" : "none"

		let secondaryDisplay = this.state.confirmModal ? {
			display : "",
		} : {
			display : "none",
		}

		let cancelDisplay = this.state.rating > 0 && this.state.rating < 3 ? {
			display : ""
		} : {
			display : "none"
		}

		let ratingDisplay = this.props.wholeState.role === "cst" ? {
			display : ""
		} : {
			display : "none"
		}

		let color = {
			color: "gray"
		}

		// let programStart = this.props.wholeState.role === "cst" ?  <StarRatingComponent renderStarIcon={() => <span>☆</span>} starColor={"#FF5770"} display={ratingDisplay} editing={true} name="rate1" starCount={5} onStarClick={this.onStarClick.bind(this)} />
		// : <div></div>

		let programStart = this.props.wholeState.role === "cst" ?  <div>{stars}</div>
		: <div></div>

		let disabled = this.state.rating === 0 ? true : false

		return  <div className="text-align-center margin-bottom-someMore vertical-align-top">
					<div className="margin-top">
						<div className="width-twenty-percent display-inline-block program-header">
						<h5>TOTAL PROGRAM ROI</h5>
							<div className="text-align-center">
								<div className="clearfix">
									<div className="c100 p46 small orange">
										<span>46%</span>
										<div className="slice">
											<div className="bar"></div>
											<div className="fill"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="width-twenty-percent display-inline-block program-header">
							<h5>SPEND</h5>
							<div className="clearfix">
								<div className="c100 p33 small orange">
									<span>33%</span>
									<div className="slice">
										<div className="bar"></div>
										<div className="fill"></div>
									</div>
								</div>
							</div>
							<div>
								<span className="program-feedback-text">current</span><br/>
								<span className="projected">$5,000</span><br/>
								<span className="program-feedback-text">projected</span><br/>
								<span className="projected">$15,000</span>
							</div>
						</div>
						<div className="width-twenty-percent display-inline-block program-header">
							<h5>TIME</h5>
							<div className="clearfix">
								<div className="c100 p50 small orange">
									<span>14 days</span>
									<div className="slice">
										<div className="bar"></div>
										<div className="fill"></div>
									</div>
								</div>
							</div>
							<div>
								<span className="program-feedback-text">projected</span><br/>
								<span className="projected">30</span><br/>
								<span className="program-feedback-text">days</span>
							</div>
						</div>
						<div className="width-twenty-percent display-inline-block program-header">
							<h5>POSTS</h5>
							<div className="clearfix">
								<div className="c100 p25 small orange">
									<span>6</span>
									<div className="slice">
										<div className="bar"></div>
										<div className="fill"></div>
									</div>
								</div>
							</div>
							<div>
								<span className="program-feedback-text">estimated</span><br/>
								<span className="projected">24</span><br/>
								<span className="program-feedback-text">posts</span>
							</div>
						</div>
						<div className="width-twenty-percent display-inline-block program-header">
							<h5 style={ratingDisplay}>PROGRAM FEEDBACK</h5>
							<p className="program-feedback-text">How happy are you with the process of creating this project?</p>
							{programStart}
							<br/>
							<button className="remove-border font-color-pink font-weight-bolder" onClick={moreAnalytics.bind(this)}>view more analytics</button>
						</div>
					</div>
					
					
					
					

					<div className="modal-outer"  style={{display}}>
						<div className="modal-inner">
							<div className="modal-top">
								<p className="display-inline-block">Cancel Program</p><button className="position-absolute top-1-rem right-1-rem remove-border text-align-right" onClick={this.handleOpenModal.bind(this)}>X</button>
							</div>
							<div className="modal-padding text-align-center">
								<h3>Are you sure you want to cancel this program?</h3>
								<button className="big-button big-red-button margin-right-little" onClick={this.handleOpenModal.bind(this)}>No, do not cancel!</button><br className="display-none-when-large"/><br className="display-none-when-large"/><button  className={this.state.className} onClick={this.confirmRemove.bind(this)}>Yes, cancel this program</button>
							</div>
							<form className="modal-form" style={secondaryDisplay} onSubmit={this.handleSubmit.bind(this)}>
								<p>Why would you like to cancel this program?</p>
								<textarea rows="4" className="textbox-width" placeholder="List your reasons here..." onChange={this.handleChange.bind(this)}></textarea><br></br>
								<input className="big-button big-red-button" type="submit" value="Submit"/>
							</form>
						</div>
					</div>
					
				</div>
	
	}
}

export default GeneralInfo