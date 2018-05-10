import React, { Component } from "react";
import Select from "react-select";

import _ from "lodash";
import { getFiltersQuery, getFilters } from "../actions/filters";
import { stringify } from "querystring";

const buildSelectOptions = (options) => {
    return _.map(options, (option) => { return {label: option, value: option};});
};

const buildFiltersInfo = (form_values, new_value, new_field) => {
    const names = [];
    const id_fields = [];

    if(new_value != ""){
        names.push(new_value);
        id_fields.push(new_field);
    }

    for(let key in form_values){
        let form_val = form_values[key];  
        // We don't want the existing state value to override the new value:
        if(form_val != "" && key+"_id" != new_field){
            names.push(form_val);
            id_fields.push(key+"_id");
        }
    }
    const return_obj = {names: names, id_fields: id_fields};

    return return_obj;
};

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.setSingularValues = this.setSingularValues.bind(this);

        const state = {};
        _.forEach(this.props.config.filter_fields, (field) => {
            state[field.name] = "";
        });
        this.state = state;
    }

    componentWillMount(){
        const filters_info = buildFiltersInfo(this.props.initial_values, "", "");
        this.setState(this.props.initial_values);
        this.props.dispatch(getFiltersQuery(filters_info, this.props.toolkit_name));
    }

    componentWillReceiveProps(nextProps) {
        if(!_.isEmpty(nextProps.filters)){
            this.setSingularValues(nextProps.filters);
        }
    }

    setSingularValues(filters) {
        _.forEach(this.props.config.filter_fields, (field) => {
            if(filters[field.name].length == 1 && this.state[field.name] === ""){
                const new_state = {};
                new_state[field.name] = filters[field.name][0];
                this.setState(new_state);
            }
        });
    }

    handleSelectChange(event, name) {
        const value = event ? event.value : "";
        const state_update = {};
        state_update[name] = value;
        this.setState(state_update);

        const params = this.state;
        params[name] = value;
        this.props.history.push(`?${stringify(params)}`);

        const filters_info = buildFiltersInfo(this.state, value, name+"_id");
        this.props.dispatch(getFiltersQuery(filters_info, this.props.toolkit_name));
    }

    clearForm() {
        _.forEach(this.props.config.filter_fields, (field) => {
            const new_state = {};
            new_state[field.name] = "";
            this.setState(new_state);
        });
        this.props.dispatch(getFilters(this.props.toolkit_name));
        this.props.history.push("");
    }

    render() {
        const selects = _.map(this.props.config.filter_fields, (field) => {
            return (
                <div className="form__row" key={field.name}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <Select 
                        name={field.name}
                        options={ buildSelectOptions(this.props.filters[field.name]) } 
                        onChange={(event, name) => this.handleSelectChange(event, field.name)}
                        value={this.state[field.name]}
                    />
                </div>
            );
        });

        return (
            <form>
                {selects}

                <button type="reset" value="Clear" className="form__clear-button" onClick={this.clearForm}>Clear</button>
            </form>
        );
    }
}

export default Form;