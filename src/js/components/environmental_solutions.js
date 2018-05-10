import React, { Component } from "react";
import _ from "lodash";

import FilterPanel from "./filter_panel";
import Providers from "./providers";

const EnvironmentalSolutions = ({results}) => {
    return(
        <table>
            <tbody>
                <tr>
                    <td className="results__providers-column">
                        <Providers providers={results.provider} />
                    </td>
                    <td className="results__additional-column">
                        <FilterPanel results={results.environmental_issue} heading="Environmental Issues" />
                        <FilterPanel results={results.epa_regulation} heading="EPA Regulations" />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default EnvironmentalSolutions;