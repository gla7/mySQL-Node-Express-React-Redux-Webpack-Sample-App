import React, { Component } from 'react'
import classNames from 'classnames'


class Star extends Component {

	render() {

		
		let r = 'fa fa-star';
    	if(!this.props.selected){
          r += '-o';
        }
        return (
        	<i {...this.props} className={r}/>
        );
	}

}

export default Star