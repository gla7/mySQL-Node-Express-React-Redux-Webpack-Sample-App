import React, { Component } from 'react'
import classNames from 'classnames'
import ReactChart from "react-chartjs"
import HorizontalBarChart from './HorizontalBarChart'



class Analytics extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			sample : "sample"
		}
	}

	render() {

		var dataLine = {
		    labels: ["January", "February", "March", "April", "May", "June", "July"],
		    datasets: [
		        {
		            label: "My First dataset",
		            fill: false,
		            lineTension: 0.1,
		            backgroundColor: "rgba(75,192,192,0.4)",
		            borderColor: "rgba(75,192,192,1)",
		            borderCapStyle: 'butt',
		            borderDash: [],
		            borderDashOffset: 0.0,
		            borderJoinStyle: 'miter',
		            pointBorderColor: "rgba(75,192,192,1)",
		            pointBackgroundColor: "#fff",
		            pointBorderWidth: 1,
		            pointHoverRadius: 5,
		            pointHoverBackgroundColor: "rgba(75,192,192,1)",
		            pointHoverBorderColor: "rgba(220,220,220,1)",
		            pointHoverBorderWidth: 2,
		            pointRadius: 1,
		            pointHitRadius: 10,
		            data: [65, 59, 80, 81, 56, 55, 40],
		        }
		    ]
		};

		var barData = {
		    labels: ["January", "February", "March", "April", "May", "June", "July"],
		    datasets: [
		        {
		            label: "My First dataset",
		            backgroundColor: "rgba(255,99,132,0.2)",
		            borderColor: "rgba(255,99,132,1)",
		            borderWidth: 1,
		            hoverBackgroundColor: "rgba(255,99,132,0.4)",
		            hoverBorderColor: "rgba(255,99,132,1)",
		            data: [65, 59, 80, 81, 56, 55, 40],
		        }
		    ]
		};

		var radarData = {
		    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
		    datasets: [
		        {
		            label: "My First dataset",
		            backgroundColor: "rgba(179,181,198,0.2)",
		            borderColor: "rgba(179,181,198,1)",
		            pointBackgroundColor: "rgba(179,181,198,1)",
		            pointBorderColor: "#fff",
		            pointHoverBackgroundColor: "#fff",
		            pointHoverBorderColor: "rgba(179,181,198,1)",
		            data: [65, 59, 90, 81, 56, 55, 40]
		        },
		        {
		            label: "My Second dataset",
		            backgroundColor: "rgba(255,99,132,0.2)",
		            borderColor: "rgba(255,99,132,1)",
		            pointBackgroundColor: "rgba(255,99,132,1)",
		            pointBorderColor: "#fff",
		            pointHoverBackgroundColor: "#fff",
		            pointHoverBorderColor: "rgba(255,99,132,1)",
		            data: [28, 48, 40, 19, 96, 27, 100]
		        }
		    ]
		};

		let pieData = [{
	            value: 14,
	            color: "#FDB45C",
	            highlight: "#FFC870",
	            label: "Failed"
        	},
        	{
        		value: 25,
              	color: "#FF6384",
              	highlight: "#FFC870",
              	label: "Failed"
        	},
        	{
        		value: 44,
              	color: "#FFCE56",
              	highlight: "#FFC870",
              	label: "Failed"
        	},
        	{
        		value: 5,
              	color: "#36A2EB",
              	highlight: "#FFC870",
              	label: "Failed"
        	}
        ];

        let dataDoughnut = [{
	            value: 14,
	            color: "#FDB45C",
	            highlight: "#FFC870",
	            label: "Failed"
        	},
        	{
        		value: 25,
              	color: "#FF6384",
              	highlight: "#FFC870",
              	label: "Failed"
        	},
        	{
        		value: 44,
              	color: "#FFCE56",
              	highlight: "#FFC870",
              	label: "Failed"
        	},
        	{
        		value: 5,
              	color: "#36A2EB",
              	highlight: "#FFC870",
              	label: "Failed"
        	}
        ];

        let polarData = [{
	            value: 14,
	            color: "#FDB45C",
	            highlight: "#FFC870",
	            label: "Failed"
        	},
        	{
        		value: 25,
              	color: "#FF6384",
              	highlight: "#FFC870",
              	label: "Failed"
        	},
        	{
        		value: 44,
              	color: "#FFCE56",
              	highlight: "#FFC870",
              	label: "Failed"
        	},
        	{
        		value: 5,
              	color: "#36A2EB",
              	highlight: "#FFC870",
              	label: "Failed"
        	}
        ];

		let Linechart = ReactChart.Line

		let Barchart = ReactChart.Bar

		let Radarchart = ReactChart.Radar

		let Polarareachart = ReactChart.PolarArea

		let Piechart = ReactChart.Pie

		let Doughnutchart = ReactChart.Doughnut

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
						arrayOfPlots[i].push((<div key={j} style={styleChart}></div>))
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
						arrayOfPlots[i].push((<div key={j} style={styleChart}></div>))
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

		

		return  <div className='fiftyPxIndentation'>
					<h1>Analytics is under construction- examples of graphics can be found below...</h1>
					<h3>Sample Line Chart:</h3>
					<Linechart data={dataLine} width="600" height="250" redraw/>
					<h3>Sample Bar Chart:</h3>
					<Barchart data={barData}  width="600" height="250" redraw/>
					<h3>Sample Radar Chart:</h3>
					<Radarchart data={radarData} width="600" height="250" redraw/>
					<h3>Sample Polar Chart:</h3>
					<Polarareachart data={polarData} width="600" height="250" redraw/>
					<h3>Sample Pie Chart:</h3>
					<Piechart data={pieData} width="600" height="250" redraw/>
					<h3>Sample Doughnut Chart:</h3>
					<Doughnutchart data={dataDoughnut} width="600" height="250" redraw/>
					<h3>Sample Horizontal Bar Chart/s:</h3>
					{makeHorizontalBarCharts("300px","30px",[{name:"yiss1",values:[12,33,89],valueNames:["one","two","three"]},{name:"yiss2",values:[5,32,9],valueNames:["four","five","six"]},{name:"yiss3",values:[9,9,9],valueNames:["seven","eight","nine"]}])}
					<h3>More Horizontal Bar Chart/s:</h3>
					{makeHorizontalBarCharts("500px","50px",[{name:"YISS",values:[12,33],valueNames:["one","two"]},{name:"NOOO",values:[5,32,9,44,22],valueNames:["three","four","five","six","seven"]},{name:"YAAA",values:[9,9,9],valueNames:["seven","eight","nine"]},{name:"OOO",values:[9],valueNames:["yiss"]}])}
					<h3>Even more Horizontal Bar Chart/s:</h3>
					{makeHorizontalBarCharts("200px","10px",[{name:"POOSEY!!!",values:[12,33,89,67,2,45,67],valueNames:["one","two","three","four","five","six","seven"]}])}
					<h3>Horizontal Bar Chart/s as its own component:</h3>
					<HorizontalBarChart widthString="200px" heightString="30px" arrayOfValues={[{name:"POOSEY!!!",values:[12,33,89,67,2,45,67],valueNames:["one","two","three","four","five","six","seven"]}]} />
				</div>
				
	}
}

export default Analytics