import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'
import influencers from '../data/influencers'
import programInfo from '../data/programInfo'



let initialState = {
	role : "cst",
	budget : 450000,
	influencers : influencers,
	programInfo : programInfo,
	isModalOpen : false,
	numberRemoved : 0,
	currentPage : "Overview",
	rated :false,
}

// $.get("/getInfluencers",function (response) {
// 	let initialState = {
// 		influencers : response.data.influencers
// 	}
// })



let store = configureStore(initialState)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)

