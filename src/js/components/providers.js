import React from 'react'
import _ from 'lodash'

const Providers = ({ providers, low_level, heading }) => {
  const items = _.map(providers, (prov) => {
    const solution_items = _.map(prov.solution_names, (name) => {
      return <li key={name}>{name}</li>
    })

    return (
      <div key={prov.name} className='toolkit-result-item'>
        <div className='toolkit-result-item-body'>
          <h3><a href={prov.links[0].url} target="_blank">{prov.name}</a></h3>
          <h4>{low_level}</h4>
          <ul className='toolkit-result-item-solutions'>{solution_items}</ul>
        </div>
      </div>
    )
  })
    // return (
    //     <div key={prov.name}>
    //         <table>
    //             <tbody>
    //                 <tr>
    //                     <td className="results__providers-column__providers__left-cell">
    //                         <h3><a href={prov.links[0].url} target="_blank">{prov.name}</a></h3>
    //                         <p>{prov.summary}</p>
    //                     </td>
    //                     <td className="results__providers-column__providers__right-cell">
    //                         <h4>{low_level}</h4>
    //                         <ul>{solution_items}</ul>
    //                     </td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         <br />
    //         <br />
    //     </div>
    // );
  return (
    <div className='toolkit-result'>
      <h2>{heading}</h2>
      <h4>Total: {providers.length}</h4>
      {items}
    </div>
  )
}

export default Providers
