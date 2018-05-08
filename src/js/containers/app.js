import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { getFilters } from '../actions/filters'
import Form from '../components/form'
import Result from '../components/result'
import { parse } from 'query-string'
import config from '../config'

class App extends Component {
	componentWillMount() {
		this.props.dispatch(getFilters(this.props.toolkit_name))
	}

  render() {
    return (
      <div>
      	<div className="form">
	      	<h1> Toolkits Search </h1>
	        <Form 
	        	filters={this.props.filters} 
	        	dispatch={this.props.dispatch}
	        	history={this.props.history} 
	        	initial_values={this.props.query}
	        	config={config[this.props.toolkit_name]}
	        	toolkit_name={this.props.toolkit_name}
	        />
        </div>
        <Result results={this.props.results} toolkit_name={this.props.toolkit_name} />
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
