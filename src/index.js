import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/app/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import Todo from './views/todo/index.jsx'


ReactDOM.render(<Todo />, document.getElementById('root'));
registerServiceWorker();
