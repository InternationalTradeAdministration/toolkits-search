import config from "../config";
import "whatwg-fetch";
import _ from "lodash";
import { stringify } from "querystring"

const SET_FILTERS = "SET_FILTERS";
const SET_RESULTS = "SET_RESULTS";

const setFilters = (data) => {
    return {
        type: SET_FILTERS,
        filters: data
    };
};

const setResults = (data) => {
    return {
        type: SET_RESULTS,
        results: data
    };
};

const buildResults = (json, toolkit_name) => {
    const results = {};
    _.forEach(config[toolkit_name].filter_types, (type, index) => {
        results[type] =  json[index].results;
    });

    return getProviderSolutions(results, toolkit_name);
};

const getProviderSolutions = (results, toolkit_name) => {
    return (dispatch) => {
        const requests = _.compact(_.map(results.provider, (prov) => {
            const type = config[toolkit_name].low_level_type;
            const id_field = config[toolkit_name].low_level_id_field;
            if(_.isEmpty(prov[id_field])) // If there are no solutions, no need to make a reqeust
                return null;
            let params = { api_key: config.api_key, type: type };
            params[`${id_field}s`] = prov[id_field].join(',');
            let params_string = stringify(params);
            return fetch(`${config[toolkit_name].endpoint}${params_string}`)
                .then((response) => {
                    return response.json();
                });
        }));
        Promise.all(requests)
            .then((json) => {
                _.forEach(json, (result, index) => {
                    results.provider[index].solution_names = _.map(result.aggregations.names, (agg) => { return agg.key; }).sort();
                });
                dispatch(setResults(results));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

const buildFilters = (json, toolkit_name) => {
    const filters = {};
    const filter_names = _.map(config[toolkit_name].filter_fields, (field) => { return field.name; });
    _.forEach(filter_names, (name, index) =>{
        let filter_vals = _.map(json[index].aggregations.names, (agg) => { return agg.key; }).sort();
        filters[name] = filter_vals;
    });
    return setFilters(filters);
};

const getFiltersQuery = (filters_info, toolkit_name) => {
    return (dispatch) => {
        const requests = _.map(filters_info.names, (name) => {
            let params = {
                api_key: config.api_key,
                name: name
            }
            let query_string = stringify(params)
            return fetch(`${config[toolkit_name].endpoint}${query_string}`)
                .then((response) => {
                    return response.json();
                });
        });
        let id_query_params = {};
        Promise.all(requests)
            .then((json) => {
                _.forEach(json, (result, index) => {
                    const id_field = filters_info.id_fields[index];
                    const id = result.results[0][id_field];
                    id_query_params[`${id_field}s`] = id;
                });
                dispatch(getFilters(toolkit_name, id_query_params));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

const getFilters = (toolkit_name, id_query_params) => {
    return (dispatch) => {
        const requests = _.map(config[toolkit_name].filter_types, (filter) => {
            return sendRequest(filter, id_query_params, toolkit_name);
        });
        Promise.all(requests)
            .then((json) => {
                dispatch(buildFilters(json, toolkit_name));
                if(!_.isEmpty(id_query_params)) //Only build results when we have an actual query
                    dispatch(buildResults(json, toolkit_name));
                else
                    dispatch(setResults({}));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

const sendRequest = (filter, id_query, toolkit_name) => {
    let params = Object.assign({ api_key: config.api_key, type: filter }, id_query);
    let params_string = stringify(params)
    return fetch(`${config[toolkit_name].endpoint}&${params_string}`)
        .then((response) => {
            return response.json();
        });
};

export { getFilters, getFiltersQuery, SET_FILTERS, SET_RESULTS };
