import config from '../config'
import 'whatwg-fetch'
import _ from 'lodash'

const SET_FILTERS = 'SET_FILTERS'
const SET_RESULTS = 'SET_RESULTS'

const setFilters = (data) => {
	return {
		type: SET_FILTERS,
		filters: data
	}
}

const setResults = (data) => {
	return {
		type: SET_RESULTS,
		results: data
	}
}

const buildResults = (json) => {
	const results = {}
	_.forEach(config.environmental_solutions.filter_types, (type, index) => {
		results[type.replace(' ', '_')] =  json[index].results
	})

	return getProviderSolutions(results)
}

const getProviderSolutions = (results) => {
	return (dispatch) => {
	const requests = _.map(results.provider, (prov) => {
			return fetch(`${config.environmental_solutions.endpoint}api_key=${config.api_key}&type=solution&solution_ids=${prov.solution_id}`)
				.then((response) => {
					return response.json()
				})
		})
	Promise.all(requests)
		.then((json) => {
			_.forEach(json, (result, index) => {
				results.provider[index].solution_names = _.map(result.aggregations.names, (agg) => { return agg.key }).sort()
			})
			dispatch(setResults(results))
		})
		.catch((error) => {
				console.log(error)
			})
	}
}

const buildFilters = (json) => {
	const filters = {}
	_.forEach(config.environmental_solutions.filter_types, (filter, index) =>{
		let filter_vals = _.map(json[index].aggregations.names, (agg) => { return agg.key }).sort()
		filters[filter.replace(' ', '_')] = filter_vals
	})
	return setFilters(filters)
}

const getFiltersQuery = (filters_info) => {
	return (dispatch) => {
		const requests = _.map(filters_info.names, (name) => {
			return fetch(`${config.environmental_solutions.endpoint}api_key=${config.api_key}&name=${name}`)
				.then((response) => {
					return response.json()
				})
		})
		let id_query = ""
		Promise.all(requests)
			.then((json) => {
				_.forEach(json, (result, index) => {
					const id_field = filters_info.id_fields[index]
					const id = result.results[0][id_field]
					id_query += `${id_field}s=${id}&`
				})
				dispatch(getFilters(id_query))
			})
			.catch((error) => {
				console.log(error)
			})
	}
}

const getFilters = (id_query) => {
	return (dispatch) => {
		const requests = _.map(config.environmental_solutions.filter_types, (filter) => {
			return sendRequest(filter, id_query)
		})
		Promise.all(requests)
			.then((json) => {
				dispatch(buildFilters(json))
				if(id_query) //Only build results when we have an actual query
					dispatch(buildResults(json))
				else
					dispatch(setResults({}))
			})
			.catch((error) => {
				console.log(error)
			})
	}
}

const sendRequest = (filter, id_query) => {
  return fetch(`${config.environmental_solutions.endpoint}&api_key=${config.api_key}&type=${filter}&${id_query}`)
    .then((response) => {
      return response.json()
    });
}

export { getFilters, getFiltersQuery, SET_FILTERS, SET_RESULTS }