import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import RouteMap from './router/routeMap'
import {hashHistory} from 'react-router'


ReactDOM.render(<RouteMap history={hashHistory}/>, document.getElementById('root'));
registerServiceWorker();
