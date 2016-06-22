import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Programs from '../components/Programs'
import Influencers from '../components/Influencers'
import Analytics from '../components/Analytics'



let initialState = {
	tab : "Programs",
	program : "none"
}

let store = configureStore(initialState)

render(
	<Provider store={store}>
		<Router history={hashHistory}>
	        <Route path='/' component={App}>
	        	<IndexRoute component={Programs}/>
	        	<Route path="/programs" component={Programs} />
	        	<Route path="/influencers" component={Influencers} />
	        	<Route path="/analytics" component={Analytics} />
	        </Route>
	    </Router>
	</Provider>,
	document.getElementById('app')
)

