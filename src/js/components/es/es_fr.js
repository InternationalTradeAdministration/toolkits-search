import React, { Component } from "react";
import _ from "lodash";

import FilterPanel from "../filter_panel";
import Providers from "../providers";

const EnvironmentalSolutionsFr = ({results}) => {
    return(
        <table>
            <tbody>
                <tr>
                    <td className="results__providers-column">
                        <Providers providers={results.provider} low_level="Solution"/>
                    </td>
                    <td className="results__additional-column">
                        <FilterPanel results={results['Problème environnemental']} heading="Problème environnemental" />
                        <FilterPanel results={results["Régulation de l'EPA"]} heading="Régulation de l'EPA" />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default EnvironmentalSolutionsFr;