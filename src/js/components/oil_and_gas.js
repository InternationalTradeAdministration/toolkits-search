import React from 'react'

import FilterPanel from './filter_panel'
import Providers from './providers'

const OilAndGas = ({results}) => {
  return (
    <div className='toolkit-results'>
      <div className='toolkit-result-group'>
        <Providers providers={results.provider} low_level='Solution' heading='U.S. Solution Provider' />
      </div>
      <div className='toolkit-result-group'>
        <FilterPanel results={results['project phase']} heading='Project Phase' />
      </div>
    </div>
  )
}

export default OilAndGas
