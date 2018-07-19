import React, { Component } from "react";
import _ from "lodash";
import Providers from "./providers";
import EnvironmentalSolutions from "./es/environmental_solutions";
import EnvironmentalSolutionsAr from "./es/es_ar";
import EnvironmentalSolutionsEs from "./es/es_es";
import EnvironmentalSolutionsFr from "./es/es_fr";
import EnvironmentalSolutionsPt from "./es/es_pt";
import EnvironmentalSolutionsRu from "./es/es_ru";
import EnvironmentalSolutionsZh from "./es/es_zh";
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
    case "environmental_solutions_es":
        results_panel = <EnvironmentalSolutionsEs results={results} />;
        break;
    case "environmental_solutions_fr":
        results_panel = <EnvironmentalSolutionsFr results={results} />;
        break;
    case "environmental_solutions_pt":
        results_panel = <EnvironmentalSolutionsPt results={results} />;
        break;
    case "environmental_solutions_ru":
        results_panel = <EnvironmentalSolutionsRu results={results} />;
        break;
    case "environmental_solutions_zh":
        results_panel = <EnvironmentalSolutionsZh results={results} />;
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

    return results_panel;
};

export default Result;
