import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { getFilters } from "../actions/filters";
import Form from "../components/form";
import Result from "../components/result";
import { parse } from "query-string";
import config from "../config";
import Select from "react-select";
import { stringify } from "querystring";

const language_options = [
    {label: 'Arabic', value: 'ar'},
    {label: 'Chinese', value: 'zh'},
    {label: 'English', value: 'en'},
    {label: 'French', value: 'fr'},
    {label: 'Portuguese', value: 'pt'},
    {label: 'Russian', value: 'ru'},
    {label: 'Spanish', value: 'es'},
];

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            language_val: '',
            toolkit_name: this.props.toolkit_name
        }
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    componentWillMount() {
        let query = parse(this.props.history.location.search);
        const language_val = query.language ? query.language : 'en';
        // Update toolkit name based on the language:
        const toolkit_name = (this.props.toolkit_name+'_'+language_val).replace('_en', '');
        this.setState({language_val: language_val, toolkit_name: toolkit_name });
        this.props.dispatch(getFilters(this.props.toolkit_name));
    }

    handleSelectChange(event) {
        const value = event ? event.value : "";
        const toolkit_name = (this.props.toolkit_name+'_'+value).replace('_en', '');

        this.props.history.push(`?${stringify({language: value})}`);
        this.setState({language_val: value, toolkit_name: toolkit_name});
    }

    render() {
        let query = parse(this.props.history.location.search);
        let language_form = null;
        if(config[this.props.toolkit_name].languages_enabled){
            language_form = (<form className='language-select'>
                    <label htmlFor="language">Select a Language</label>
                    <Select 
                        name="language"
                        options={language_options} 
                        onChange={this.handleSelectChange}
                        value={this.state.language_val}
                    />
                    <br />
                </form>);
        }
        return (
            <div>
              	<div className="form">
        	      	<h1>{config[this.state.toolkit_name].heading}</h1>
        	      	<p>{config[this.state.toolkit_name].description}</p>
                    {language_form}
        	        <Form 
        	        	filters={this.props.filters} 
        	        	dispatch={this.props.dispatch}
        	        	history={this.props.history} 
        	        	initial_values={query}
        	        	config={config[this.state.toolkit_name]}
        	        	toolkit_name={this.state.toolkit_name}
        	        />
                        </div>
                        <Result results={this.props.results} toolkit_name={this.state.toolkit_name} />
                        <div className="disclaimer">
                	<h4>Disclaimer</h4>
                	<p>{config[this.state.toolkit_name].disclaimer}</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        filters: state.filters,
        results: state.results,
    };
}

export default connect(
    mapStateToProps
)(App);
