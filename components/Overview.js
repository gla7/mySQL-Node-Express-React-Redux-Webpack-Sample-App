import React, { Component } from 'react'
import GeneralInfo from './GeneralInfo'
import InfoItems from './InfoItems'
import Person from './Person'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import classNames from 'classnames'


class Overview extends Component {

	render() {

		
		return (
		<div>
			<GeneralInfo wholeState={this.props.wholeState} allActions={this.props.allActions}/>
			<InfoItems   wholeState={this.props.wholeState} allActions={this.props.allActions}/>
		</div>
		)
	}

}

export default Overview