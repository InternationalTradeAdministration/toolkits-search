import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { getFilters } from "../actions/filters";
import Form from "../components/form";
import Result from "../components/result";
import { parse } from "query-string";
import config from "../config";

class App extends Component {
    componentWillMount() {
        this.props.dispatch(getFilters(this.props.toolkit_name));
    }

    render() {
        return (
            <div>
      	<div className="form">
	      	<h1>{config[this.props.toolkit_name].heading}</h1>
	      	<p>{config[this.props.toolkit_name].description}</p>
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
                <div className="disclaimer">
        	<h4>Disclaimer</h4>
        	<p>{config[this.props.toolkit_name].disclaimer}</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    let query = parse(ownProps.history.location.search);

    return {
        filters: state.filters,
        results: state.results,
        query
    };
}

export default connect(
    mapStateToProps
)(App);
