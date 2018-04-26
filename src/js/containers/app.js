import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { getFilters } from '../actions/filters'
import Form from '../components/form'

class App extends Component {
	componentWillMount() {
		this.props.dispatch(getFilters())
	}

	handleSubmit(params) {

	}

  render() {
    return (
      <div>
      	<h1> Toolkits Search - Environmental Solutions </h1>
        <Form filters={this.props.filters} dispatch={this.props.dispatch} />
      </div>
    );
  }
}

function mapStateToProps(state){
	return {
		filters: state.filters
	}
}

export default connect(
	mapStateToProps
)(App)
