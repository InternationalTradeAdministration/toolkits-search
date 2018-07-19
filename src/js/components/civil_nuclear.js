import React from 'react'

import Providers from './providers'

const CivilNuclear = ({results}) => {
  return (
    <div className='toolkit-results toolkit-results-only-providers'>
      <div className='toolkit-result-group'>
        <Providers providers={results.provider} low_level='Solution' heading='U.S. Solution Provider' />
      </div>
    </div>
  )
}

export default CivilNuclear
