import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'; // Si tienes un archivo CSS global
import MasterScreen from './components/MasterScreen';

ReactDOM.render(
  <React.StrictMode>
    <MasterScreen />
  </React.StrictMode>,
  document.getElementById('root')
);