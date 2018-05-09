import React, { Component } from 'react'
import _ from 'lodash'

import FilterPanel from './filter_panel'
import Providers from './providers'

const CivilNuclear = ({results}) => {
	return(
		<table>
			<tbody>
				<tr>
					<td className="results__providers-column">
						<Providers providers={results.provider} />
					</td>
				</tr>
			</tbody>
		</table>
	)
}

export default CivilNuclear