import React from 'react'

import FilterPanel from '../filter_panel'
import Providers from '../providers'

const EnvironmentalSolutionsAr = ({ results }) => {
  return (
    <div className='toolkit-results'>
      <div className='toolkit-result-group'>
        <Providers providers={results.provider} low_level='حل' heading='موفر الحلول الأمريكي' />
      </div>
      <div className='toolkit-result-group'>
        <FilterPanel results={results['قضية بيئية']} heading='قضية بيئية' />
        <FilterPanel results={results['لائحة وكالة حماية البيئة']} heading='لائحة وكالة حماية البيئة'
          renderItemTitle={false} />
      </div>
    </div>
  )
}

export default EnvironmentalSolutionsAr
