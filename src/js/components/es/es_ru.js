import React from 'react'

import FilterPanel from '../filter_panel'
import Providers from '../providers'

const EnvironmentalSolutionsRu = ({results}) => {
  return (
    <div className='toolkit-results'>
      <div className='toolkit-result-group'>
        <Providers providers={results.provider} low_level='Solution' heading='Provider' />
      </div>
      <div className='toolkit-result-group'>
        <FilterPanel results={results['environmental issue']} heading='Environmental Issues' />
        <FilterPanel results={results['epa regulation']} heading='EPA Regulations' renderItemTitle={false} />
      </div>
    </div>
  )
}

export default EnvironmentalSolutionsRu
