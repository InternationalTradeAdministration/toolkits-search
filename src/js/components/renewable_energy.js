import React from 'react'

import FilterPanel from './filter_panel'
import Providers from './providers'

const RenewableEnergy = ({results}) => {
  return (
    <div className='toolkit-results'>
      <div className='toolkit-result-group'>
        <Providers providers={results.provider} low_level='Solution' heading='U.S. Solution Provider' />
      </div>
      <div className='toolkit-result-group'>
        <FilterPanel results={results.sector} heading='Sector' />
      </div>
    </div>
  )
}

export default RenewableEnergy
