import React, { Component } from "react";
import _ from "lodash";

const Providers = ({providers}) => {
    const items = _.map(providers, (prov) => {
        const solution_items = _.map(prov.solution_names, (name) => {
            return <li>{name}</li>;
        });

        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td className="results__providers-column__providers__left-cell">
                                <h3><a href={prov.links[0].url} target="_blank">{prov.name}</a></h3>
                                <p>{prov.summary}</p>
                            </td>
                            <td className="results__providers-column__providers__right-cell">
                                <h4>Solutions:</h4>
                                <ul>{solution_items}</ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <br />
            </div>
        );
    });
    return (
        <div className="results__providers-column__providers">
            <h2>Providers</h2>
            <h4>Total: {providers.length}</h4>
            {items}
        </div>
    );
};

export default Providers;