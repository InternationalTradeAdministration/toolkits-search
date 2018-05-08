import React, { Component } from 'react'
import _ from 'lodash'
import Providers from './providers'
import EnvironmentalSolutions from './environmental_solutions'
import OilAndGas from './oil_and_gas'

const Result = ({results, toolkit_name}) => {
	if(_.isEmpty(results))
		return null
	let results_panel

	switch(toolkit_name) {
		case 'environmental_solutions':
			results_panel = <EnvironmentalSolutions results={results} />
			break
		case 'oil_and_gas':
			results_panel = <OilAndGas results={results} />
			break
		default:
			results_panel = null
	}

	return (
		<div className="results">
			{results_panel}
		</div>
	)
}

export default Result