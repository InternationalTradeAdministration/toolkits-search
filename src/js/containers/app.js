import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { getFilters } from '../actions/filters'
import Form from '../components/form'
import Result from '../components/result'
import { parse } from 'query-string'

class App extends Component {
	componentWillMount() {
		this.props.dispatch(getFilters())
	}

  render() {
    return (
      <div>
      	<div className="form">
	      	<h1> Toolkits Search - Environmental Solutions </h1>
	        <Form 
	        	filters={this.props.filters} 
	        	dispatch={this.props.dispatch}
	        	history={this.props.history} 
	        	initial_values={this.props.query}
	        />
        </div>
        <Result results={this.props.results} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
	let query = parse(ownProps.history.location.search)

	return {
		filters: state.filters,
		results: state.results,
		query
	}
}

export default connect(
	mapStateToProps
)(App)
