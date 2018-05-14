import React, { Component } from "react";
import _ from "lodash";

import FilterPanel from "./filter_panel";
import Providers from "./providers";

const EnvironmentalSolutionsAr = ({results}) => {
    return(
        <table>
            <tbody>
                <tr>
                    <td className="results__providers-column">
                        <Providers providers={results.provider} low_level="حل"/>
                    </td>
                    <td className="results__additional-column">
                        <FilterPanel results={results['قضية بيئية']} heading="قضية بيئية" />
                        <FilterPanel results={results['لائحة وكالة حماية البيئة']} heading="لائحة وكالة حماية البيئة" />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default EnvironmentalSolutionsAr;