import React from 'react'

import FilterPanel from '../filter_panel'
import Providers from '../providers'

const EnvironmentalSolutionsPt = ({results}) => {
  return (
    <div className='toolkit-results'>
      <div className='toolkit-result-group'>
        <Providers providers={results.provider} low_level='Solução' heading='Provedora de Soluções EUA' />
      </div>
      <div className='toolkit-result-group'>
        <FilterPanel results={results['Questão Ambiental']} heading='Questão Ambiental' />
        <FilterPanel results={results['EPA Regulamento']} heading='EPA Regulamento' renderItemTitle={false} />
      </div>
    </div>
  )
}

export default EnvironmentalSolutionsPt
