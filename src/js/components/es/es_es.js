import React, { Component } from "react";
import _ from "lodash";

import FilterPanel from "../filter_panel";
import Providers from "../providers";

const EnvironmentalSolutionsEs = ({results}) => {
    return(
        <table>
            <tbody>
                <tr>
                    <td className="results__providers-column">
                        <Providers providers={results.provider} low_level="Solución"/>
                    </td>
                    <td className="results__additional-column">
                        <FilterPanel results={results['Cuestión Ambiental']} heading="Cuestión Ambiental" />
                        <FilterPanel results={results['Reglamento de la EPA']} heading="Reglamento de la EPA" />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default EnvironmentalSolutionsEs;