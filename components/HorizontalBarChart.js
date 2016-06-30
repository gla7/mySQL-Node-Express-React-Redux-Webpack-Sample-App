import React, { Component } from 'react'
import classNames from 'classnames'
import ReactChart from "react-chartjs"



class HorizontalBarChart extends Component {

	// constructor(props, context) {
	// 	super(props, context)
	// 	this.state = {
	// 		isHover : "sample"
	// 	}
	// }

	mouseIn () {
		console.log("mouse in")
	}

	mouseOut () {
		console.log("mouse out")
	}

	render() {

		let self = this

		function makeHorizontalBarCharts (widthString,heightString,arrayOfArraysOfValues) {
			var arrayOfPlots = []
			var cssColorsArray = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
			var colorsSelected = []
			for ( var i = 0; i < arrayOfArraysOfValues.length; i++ ) {
				arrayOfPlots.push([])
				for ( var j = 0; j < arrayOfArraysOfValues[i].values.length; j++ ) {
					if ( colorsSelected.length !== arrayOfArraysOfValues[i].values.length ) {
						var grandTotalAdded = arrayOfArraysOfValues[i].values.reduce(function (item,total) {return total+item})
						var colorIndexSelected = Math.round(Math.random()*(cssColorsArray.length - 1))
						var colorSelected = cssColorsArray[colorIndexSelected]
						var width = ((arrayOfArraysOfValues[i].values[j]/grandTotalAdded)*100).toString() + "%"
						if ( j === 0 ) {
							var styleChart = {
								position : "relative",
								borderTopLeftRadius : "3px",
								borderBottomLeftRadius : "3px",
								backgroundColor : colorSelected,
								width : width,
								height : "100%",
								display : "inline-block",
								padding:"0"
							}
						} else if ( j === arrayOfArraysOfValues[i].values.length - 1 ) {
							var styleChart = {
								position : "relative",
								borderTopRightRadius : "3px",
								borderBottomRightRadius : "3px",
								backgroundColor : colorSelected,
								width : width,
								height : "100%",
								display : "inline-block",
								padding:"0"
							}
						} else {
							var styleChart = {
								position : "relative",
								backgroundColor : colorSelected,
								width : width,
								height : "100%",
								display : "inline-block",
								padding:"0"
							}
						}
						arrayOfPlots[i].push((<div key={j} onMouseEnter={self.mouseIn} onMouseLeave={self.mouseOut} style={styleChart}></div>))
						cssColorsArray.splice(colorIndexSelected,1)
						colorsSelected.push(colorSelected)
					} else {
						var grandTotalAdded = arrayOfArraysOfValues[i].values.reduce(function (item,total) {return total+item})
						var colorSelected = colorsSelected[j]
						var width = ((arrayOfArraysOfValues[i].values[j]/grandTotalAdded)*100).toString() + "%"
						if ( j === 0 ) {
							var styleChart = {
								position : "relative",
								borderTopLeftRadius : "3px",
								borderBottomLeftRadius : "3px",
								backgroundColor : colorSelected,
								width : width,
								height : "100%",
								display : "inline-block",
								padding:"0"
							}
						} else if ( j === arrayOfArraysOfValues[i].values.length - 1 ) {
							var styleChart = {
								position : "relative",
								borderTopRightRadius : "3px",
								borderBottomRightRadius : "3px",
								backgroundColor : colorSelected,
								width : width,
								height : "100%",
								display : "inline-block",
								padding:"0"
							}
						} else {
							var styleChart = {
								position : "relative",
								backgroundColor : colorSelected,
								width : width,
								height : "100%",
								display : "inline-block",
								padding:"0"
							}
						}
						arrayOfPlots[i].push((<div key={j} onMouseEnter={self.mouseIn} onMouseLeave={self.mouseOut}  style={styleChart}></div>))
					}
				}
				var styleContainer = {
					position : "relative",
					width : widthString,
					height : heightString,
					display : "inline-block",
					paddingBottom:"15px"
				}
				arrayOfPlots[i] = (<div key={i}><div style={{display:"inline-block"}}>{arrayOfArraysOfValues[i].name} &nbsp; &nbsp;</div><div style={styleContainer}>{arrayOfPlots[i].map(item => {return (item)})}</div></div>)
			}
			return arrayOfPlots.map(item => {
												return (item)
											})
										
		}

		

		return  <div>
					{makeHorizontalBarCharts(this.props.widthString,this.props.heightString,this.props.arrayOfValues)}
				</div>
				
	}
}

export default HorizontalBarChart