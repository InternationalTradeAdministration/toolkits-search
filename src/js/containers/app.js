import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { getFilters } from '../actions/filters'
import Form from '../components/form'
import Result from '../components/result'

class App extends Component {
	componentWillMount() {
		this.props.dispatch(getFilters())
	}

  render() {
    return (
      <div>
      	<div className="form_content">
	      	<h1> Toolkits Search - Environmental Solutions </h1>
	        <Form filters={this.props.filters} dispatch={this.props.dispatch} />
        </div>
        <Result results={this.props.results} />
      </div>
    );
  }
}

function mapStateToProps(state){
	return {
		filters: state.filters,
		results: state.results
	}
}

export default connect(
	mapStateToProps
)(App)
