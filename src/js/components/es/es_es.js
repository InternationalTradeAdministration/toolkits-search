import React from 'react'

import FilterPanel from '../filter_panel'
import Providers from '../providers'

const EnvironmentalSolutionsEs = ({ results }) => {
  return (
    <div className='toolkit-results'>
      <div className='toolkit-result-group'>
        <Providers providers={results.provider} low_level='Solución' heading='Proveedor de Soluciones de EE.' />
      </div>
      <div className='toolkit-result-group'>
        <FilterPanel results={results['Cuestión Ambiental']} heading='Cuestión Ambiental' />
        <FilterPanel results={results['Reglamento de la EPA']} heading='Reglamento de la EPA' renderItemTitle={false} />
      </div>
    </div>
  )
}

export default EnvironmentalSolutionsEs
