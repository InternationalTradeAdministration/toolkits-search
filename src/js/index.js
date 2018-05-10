import React, { Component } from "react";
import { render } from "react-dom";
import App from "./containers/app";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/reducer";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createHistory from "history/createHashHistory";

import "../css/style.scss";

function renderToElement(elementId, toolkit_name) {
    const store = createStore(reducer, applyMiddleware(thunk, logger));
    const history = createHistory();

    render(
        <Provider store={store} key="provider">
            <App history={history} toolkit_name={toolkit_name} />
        </Provider>,
        document.getElementById(elementId) 
    );
}

export default renderToElement;
window.ToolkitSearch = {
    render: renderToElement
};
