import config from '../config'
import 'whatwg-fetch'
import _ from 'lodash'

const SET_FILTERS = 'SET_FILTERS'

const setFilters = (data) => {
	return {
		type: SET_FILTERS,
		filters: data
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
			})
			.catch((error) => {
				console.log(error)
			})
	}
}

const sendRequest = (filter, id_query) => {
  return fetch(`${config.environmental_solutions.endpoint}size=1&api_key=${config.api_key}&type=${filter}&${id_query}`)
    .then((response) => {
      return response.json()
    });
}

export { getFilters, getFiltersQuery, SET_FILTERS }