import React, { Component } from 'react'
import classNames from 'classnames'
import ReactChart from "react-chartjs"



class Analytics extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			sample : "sample"
		}
	}

	render() {

		var polarData = {
		    datasets: [{
		        data: [
		            11,
		            16,
		            7,
		            3,
		            14
		        ],
		        backgroundColor: [
		            "#FF6384",
		            "#4BC0C0",
		            "#FFCE56",
		            "#E7E9ED",
		            "#36A2EB"
		        ],
		        label: 'My dataset' // for legend
		    }],
		    labels: [
		        "Red",
		        "Green",
		        "Yellow",
		        "Grey",
		        "Blue"
		    ]
		};

		var dataDoughnut = {
		    labels: [
		        "Red",
		        "Blue",
		        "Yellow"
		    ],
		    datasets: [
		        {
		            data: [300, 50, 100],
		            backgroundColor: [
		                "#FF6384",
		                "#36A2EB",
		                "#FFCE56"
		            ],
		            hoverBackgroundColor: [
		                "#FF6384",
		                "#36A2EB",
		                "#FFCE56"
		            ]
		        }]
		};

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

		var pieData = {
		    labels: [
		        "Red",
		        "Blue",
		        "Yellow"
		    ],
		    datasets: [
		        {
		            data: [300, 50, 100],
		            backgroundColor: [
		                "#FF6384",
		                "#36A2EB",
		                "#FFCE56"
		            ],
		            hoverBackgroundColor: [
		                "#FF6384",
		                "#36A2EB",
		                "#FFCE56"
		            ]
		        }]
		};

		let Linechart = ReactChart.Line

		let Barchart = ReactChart.Bar

		let Radarchart = ReactChart.Radar

		let Polarareachart = ReactChart.PolarArea

		let Piechart = ReactChart.Pie

		let Doughnutchart = ReactChart.Doughnut

		

		

		return  <div className='fiftyPxIndentation'>
					<h1>Analytics is under construction- examples of graphics can be found below...</h1>
					<Linechart data={dataLine} width="600" height="250" redraw/>
					<Barchart data={barData}  width="600" height="250" redraw/>
					<Radarchart data={radarData} width="600" height="250" redraw/>
					<Polarareachart data={polarData} width="600" height="250" redraw/>
					<Piechart data={pieData} width="600" height="250" redraw/>
					<Doughnutchart data={dataDoughnut} width="600" height="250" redraw/>
				</div>
				
	}
}

export default Analytics