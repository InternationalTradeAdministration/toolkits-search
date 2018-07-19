import React, { Component } from 'react'
import _ from 'lodash'

const FilterPanel = ({ results, heading, renderItemTitle = true }) => {
  const items = _.map(results, (item) => {
    const links = _.map(item.links, (link) => {
      return <li key={link.url}><a href={link.url} target="_blank">{link.display_name}</a></li>
    })

    const itemTitle = renderItemTitle ? <h3>{item.name}</h3> : null
    const itemText = _.isEmpty(item.summary) ? null :  <p className='toolkit-result-item-text'>{item.summary}</p>

    return (
      <div key={item.name} className='toolkit-result-item toolkit-result-item-non-provider'>
        <div className='toolkit-result-item-body'>
          {itemTitle}
          {itemText}
          <ul className='toolkit-result-item-links'>
            {links}
          </ul>
        </div>
      </div>
    )
  })

  return (
    <div className='toolkit-result'>
      <h2>{heading}</h2>
      {items}
    </div>
  )
}

export default FilterPanel
