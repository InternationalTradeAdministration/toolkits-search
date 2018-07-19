import React from 'react'

import FilterPanel from '../filter_panel'
import Providers from '../providers'

const EnvironmentalSolutionsFr = ({ results }) => {
  return (
    <div className='toolkit-results'>
      <div className='toolkit-result-group'>
        <Providers providers={results.provider} low_level='Solution' heading='Fournisseur de solution améric' />
      </div>
      <div className='toolkit-result-group'>
        <FilterPanel results={results['Problème environnemental']} heading='Problème environnemental' />
        <FilterPanel results={results['Régulation de l\'EPA']} heading="Régulation de l'EPA" renderItemTitle={false} />
      </div>
    </div>
  )
}

export default EnvironmentalSolutionsFr
