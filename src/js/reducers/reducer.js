import { SET_FILTERS } from '../actions/filters'

const initial_state = {
  is_fetching: false,
  results: [],
  filters: {}
}

function reducer(state=initial_state, action){
	switch(action.type) {
		case SET_FILTERS:
			return Object.assign({}, state, {
				filters: action.filters
			})
		default:
			return state
	}
}

export default reducer