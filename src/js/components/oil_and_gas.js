import React, { Component } from "react";
import _ from "lodash";

import FilterPanel from "./filter_panel";
import Providers from "./providers";

const OilAndGas = ({results}) => {
    return(
        <table>
            <tbody>
                <tr>
                    <td className="results__providers-column">
                        <Providers providers={results.provider} low_level="Solution" />
                    </td>
                    <td className="results__additional-column">
                        <FilterPanel results={results['project phase']} heading="Project Phase" />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default OilAndGas;