import React, { Component } from 'react'
import _ from 'lodash'

import FilterPanel from './filter_panel'
import Providers from './providers'

const RenewableEnergy = ({results}) => {
	return(
		<table>
			<tbody>
				<tr>
					<td className="results__providers-column">
						<Providers providers={results.provider} />
					</td>
					<td className="results__additional-column">
						<FilterPanel results={results.sector} heading="Sector" />
					</td>
				</tr>
			</tbody>
		</table>
	)
}

export default RenewableEnergy