import React, { Component } from 'react'
import _ from 'lodash'

const Result = ({results}) => {
	if(_.isEmpty(results))
		return null
	else{
		return (
			<div className="results">
				<table>
					<tbody>
						<tr>
							<td className="results__providers-column">
								<Providers providers={results.provider} />
							</td>
							<td className="results__issues-column">
								<Issues issues={results.environmental_issue} />
								<Regulations regulations={results.epa_regulation} />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

const Issues = ({issues}) => {
	const items = _.map(issues, (issue) => {
		const links = _.map(issue.links, (link) => {
			return <p><a href={link.url} target="_blank">{link.display_name}</a></p>
		})
		return (
			<div>
				<h4>{issue.name}</h4>
				<p>{issue.summary}</p>
				{links}
			</div>
		)
	})
	return (
		<div className="results__issues-column__issues">
			<h2>Environmental Issue</h2>
			{items}
		</div>
	)
}

const Regulations = ({regulations}) => {
	const items = _.map(regulations, (reg) => {
		const links = _.map(reg.links, (link) => {
			return <p><a href={link.url} target="_blank">{link.display_name}</a></p>
		})
		return (
			<div>
				<h4>{reg.name}</h4>
				{links}
			</div>
		)
	})
	return (
		<div className="results__issues-column__regulations">
			<h2>EPA Regulations</h2>
			{items}
		</div>
	)
}

const Providers = ({providers}) => {
	const items = _.map(providers, (prov) => {
		const solution_items = _.map(prov.solution_names, (name) => {
			return <li>{name}</li>
		})
		
		return (
			<div>
				<table>
					<tbody>
						<tr>
							<td className="results__providers-column__providers__left-cell">
								<h3><a href={prov.links[0].url} target="_blank">{prov.name}</a></h3>
								<p>{prov.summary}</p>
							</td>
							<td className="results__providers-column__providers__right-cell">
								<h4>Solutions:</h4>
								<ul>{solution_items}</ul>
							</td>
						</tr>
					</tbody>
				</table>
				<br />
				<br />
			</div>
		)
	})
	return (
		<div className="results__providers-column__providers">
			<h2>Providers</h2>
			{items}
		</div>
	)
}

export default Result