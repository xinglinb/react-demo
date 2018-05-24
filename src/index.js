import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import RouteMap from './router/routeMap'
import { browserHistory } from 'react-router'


ReactDOM.render(<RouteMap history={browserHistory}/>, document.getElementById('root'));
registerServiceWorker();
