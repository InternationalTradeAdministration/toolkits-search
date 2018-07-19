import React from 'react'

import FilterPanel from '../filter_panel'
import Providers from '../providers'

const EnvironmentalSolutionsZh = ({results}) => {
  return (
    <div className='toolkit-results'>
      <div className='toolkit-result-group'>
        <Providers providers={results.provider} low_level='解决方案' heading='美国解决方案供应商' />
      </div>
      <div className='toolkit-result-group'>
        <FilterPanel results={results['环境问题']} heading='环境问题' />
        <FilterPanel results={results['环保署管制']} heading='环保署管制' renderItemTitle={false} />
      </div>
    </div>
  )
}

export default EnvironmentalSolutionsZh
