import React, { Component } from "react";
import _ from "lodash";

import FilterPanel from "../filter_panel";
import Providers from "../providers";

const EnvironmentalSolutionsPt = ({results}) => {
    return(
        <table>
            <tbody>
                <tr>
                    <td className="results__providers-column">
                        <Providers providers={results.provider} low_level="Solução"/>
                    </td>
                    <td className="results__additional-column">
                        <FilterPanel results={results['Questão Ambiental']} heading="Questão Ambiental" />
                        <FilterPanel results={results['EPA Regulamento']} heading="EPA Regulamento" />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default EnvironmentalSolutionsPt;