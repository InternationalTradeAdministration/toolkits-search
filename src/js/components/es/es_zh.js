import React, { Component } from "react";
import _ from "lodash";

import FilterPanel from "../filter_panel";
import Providers from "../providers";

const EnvironmentalSolutionsZh = ({results}) => {
    return(
        <table>
            <tbody>
                <tr>
                    <td className="results__providers-column">
                        <Providers providers={results.provider} low_level="解决方案" heading="美国解决方案供应商"/>
                    </td>
                    <td className="results__additional-column">
                        <FilterPanel results={results['环境问题']} heading="环境问题" />
                        <FilterPanel results={results['环保署管制']} heading="环保署管制" />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default EnvironmentalSolutionsZh;