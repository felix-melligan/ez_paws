import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';

// Components
import WrapperComponent from './components/WrapperComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<WrapperComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
