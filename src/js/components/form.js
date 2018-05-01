import React, { Component } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import _ from 'lodash'
import { getFiltersQuery, getFilters } from '../actions/filters'
import { stringify } from 'querystring'

const field_names_to_id = {
	provider_val: 'provider_id',
	issue_val: 'issue_id',
	reg_val: 'regulation_id',
	solution_val: 'solution_id'
}

const buildSelectOptions = (options) => {
	return _.map(options, (option) => { return {label: option, value: option}})
}

const buildFiltersInfo = (form_values, new_value, new_field) => {
	const names = []
	const id_fields = []

	if(new_value != ""){
		names.push(new_value)
		id_fields.push(new_field)
	}

	for(let key in form_values){
		let form_val = form_values[key]  
		// We don't want the existing state value to override the new value:
		if(form_val != "" && field_names_to_id[key] != new_field){
			names.push(form_val)
			id_fields.push(field_names_to_id[key])
		}
	}
	const return_obj = {names: names, id_fields: id_fields}

	return return_obj
}

class Form extends React.Component {
	constructor(props) {
		super(props)
		this.handleProviderChange = this.handleProviderChange.bind(this)
		this.handleIssueChange = this.handleIssueChange.bind(this)
		this.handleRegChange = this.handleRegChange.bind(this)
		this.handleSolutionChange = this.handleSolutionChange.bind(this)
		this.clearForm = this.clearForm.bind(this)
		this.setSingularValues = this.setSingularValues.bind(this)
		this.state = {
			provider_val: '',
			issue_val: '',
			reg_val: '',
			solution_val: ''
		}
	}

	componentWillMount(){
		const filters_info = buildFiltersInfo(this.props.initial_values, '', '')
		this.setState(this.props.initial_values)
		this.props.dispatch(getFiltersQuery(filters_info))
	}

	componentWillReceiveProps(nextProps) {
		if(!_.isEmpty(nextProps.filters)){
			this.setSingularValues(nextProps.filters)
		}
	}

	setSingularValues(filters) {
		if(filters.provider.length == 1 && this.state.provider_val === '')
			this.setState({provider_val: filters.provider[0]})
		if(filters.environmental_issue.length == 1 && this.state.issue_val === '')
			this.setState({issue_val: filters.environmental_issue[0]})
		if(filters.epa_regulation.length == 1 && this.state.reg_val === '')
			this.setState({reg_val: filters.epa_regulation[0]})
		if(filters.solution.length == 1 && this.state.solution_val === '')
			this.setState({solution_val: filters.solution[0]})
	}

	handleProviderChange(event) {
		const value = event ? event.value : ''
		this.setState({provider_val: value})
		const params = this.state
		params.provider_val = value
		this.props.history.push(`?${stringify(params)}`)

		const filters_info = buildFiltersInfo(this.state, value, 'provider_id')
		
		this.props.dispatch(getFiltersQuery(filters_info))
	}

	handleIssueChange(event) {
		const value = event ? event.value : ''
		this.setState({issue_val: value})
		const params = this.state
		params.issue_val = value
		this.props.history.push(`?${stringify(params)}`)

		const filters_info = buildFiltersInfo(this.state, value, 'issue_id')

		this.props.dispatch(getFiltersQuery(filters_info))
	}

	handleRegChange(event) {
		const value = event ? event.value : ''
		this.setState({reg_val: value})
		const params = this.state
		params.reg_val = value
		this.props.history.push(`?${stringify(params)}`)

		const filters_info = buildFiltersInfo(this.state, value, 'regulation_id')

		this.props.dispatch(getFiltersQuery(filters_info))
	}

	handleSolutionChange(event) {
		const value = event ? event.value : ''
		this.setState({solution_val: value})
		const params = this.state
		params.solution_val = value
		this.props.history.push(`?${stringify(params)}`)

		const filters_info = buildFiltersInfo(this.state, value, 'solution_id')

		this.props.dispatch(getFiltersQuery(filters_info))
	}

	clearForm() {
		this.setState({provider_val: ''})
		this.setState({issue_val: ''})
		this.setState({reg_val: ''})
		this.setState({solution_val: ''})
		this.props.dispatch(getFilters())
	}

	render() {
			let provider_val = this.state.provider_val
			let issue_val = this.state.issue_val
			let reg_val = this.state.reg_val
			let solution_val = this.state.solution_val

		return (
			<form>
				<div className="form__row">
					<label htmlFor="provider">Provider</label>
					<Select 
						name="provider" 
						options={ buildSelectOptions(this.props.filters.provider) } 
						onChange={this.handleProviderChange}
						value={provider_val}
					/>
				</div>

				<div className="form__row">
					<label htmlFor="environmental_issue">Environmental Issue</label>
					<Select 
						name="environmental_issue" 
						options={ buildSelectOptions(this.props.filters.environmental_issue) } 
						onChange={this.handleIssueChange}
						value={issue_val}
					/>
				</div>

				<div className="form__row">
					<label htmlFor="epa_regulation">EPA Regulation</label>
					<Select 
						name="epa_regulation" 
						options={ buildSelectOptions(this.props.filters.epa_regulation) } 
						onChange={this.handleRegChange}
						value={reg_val}
					/>
				</div>

				<div className="form__row">
					<label htmlFor="solution">Solution</label>
					<Select 
						name="solution" 
						options={ buildSelectOptions(this.props.filters.solution) } 
						onChange={this.handleSolutionChange}
						value={solution_val}
					/>
				</div>

				<button type="reset" value="Clear" className="form__clear-button" onClick={this.clearForm}>Clear</button>
			</form>
		)
	}
}

export default Form