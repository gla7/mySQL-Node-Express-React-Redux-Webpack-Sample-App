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

		let Linechart = ReactChart.Line

		let Doughnutchart = ReactChart.Doughnut

		console.log(Linechart)

		return  <div className='fiftyPxIndentation'>
					<h1>Analytics is under construction- examples of graphics can be found below...</h1>
					<Linechart data={dataLine} width="600" height="250" redraw/>
					<Doughnutchart data={dataDoughnut} width="600" height="250" redraw/>
				</div>
				
	}
}

export default Analytics