import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from './Header';
import Services from './Services';


ReactDOM.render(<App LogoTitle="React Portfolio" />, document.getElementById('root'));
registerServiceWorker();
