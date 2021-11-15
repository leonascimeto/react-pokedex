import React from 'react';
import ReactDOM from 'react-dom';
import LoadingSpinnerScreen from './components/LoadingSpinnerScreen';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
