import { SET_FILTERS, SET_RESULTS } from '../actions/filters'

const initial_state = {
  is_fetching: false,
  results: {},
  filters: {}
}

function reducer(state=initial_state, action){
	switch(action.type) {
		case SET_FILTERS:
			return Object.assign({}, state, {
				filters: action.filters
			})
		case SET_RESULTS:
			return Object.assign({}, state, {
				results: action.results
			})	
		default:
			return state
	}
}

export default reducer