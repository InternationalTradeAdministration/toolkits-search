import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './containers/app'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/reducer'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import '../css/style.css'

const store = createStore(reducer, applyMiddleware(thunk, logger))

render(
	<Provider store={store} key="provider">
		<App />
	</Provider>,
	document.getElementById('toolkits-search') 
) 