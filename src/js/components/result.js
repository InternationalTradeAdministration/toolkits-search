import React, { Component } from "react";
import _ from "lodash";
import Providers from "./providers";
import EnvironmentalSolutions from "./environmental_solutions";
import EnvironmentalSolutionsAr from "./environmental_solutions_ar";
import OilAndGas from "./oil_and_gas";
import RenewableEnergy from "./renewable_energy";
import NextGen from "./next_gen";
import SmartGrid from "./smart_grid";
import CivilNuclear from "./civil_nuclear";

const Result = ({results, toolkit_name}) => {
    if(_.isEmpty(results))
        return null;
    let results_panel;

    switch(toolkit_name) {
    case "environmental_solutions":
        results_panel = <EnvironmentalSolutions results={results} />;
        break;
    case "environmental_solutions_ar":
        results_panel = <EnvironmentalSolutionsAr results={results} />;
        break;
    case "oil_and_gas":
        results_panel = <OilAndGas results={results} />;
        break;
    case "renewable_energy":
        results_panel = <RenewableEnergy results={results} />;
        break;
    case "next_gen":
        results_panel = <NextGen results={results} />;
        break;
    case "smart_grid":
        results_panel = <SmartGrid results={results} />;
        break;
    case "civil_nuclear":
        results_panel = <CivilNuclear results={results} />;
        break;
    default:
        results_panel = null;
    }

    return (
        <div className="results">
            {results_panel}
        </div>
    );
};

export default Result;