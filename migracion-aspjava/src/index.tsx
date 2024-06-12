import React from 'react';
import ReactDOM from 'react-dom';
import MasterScreen from './components/MasterScreen';
import './css/index.css'; // Si tienes un archivo CSS global

ReactDOM.render(
  <React.StrictMode>
    <MasterScreen />
  </React.StrictMode>,
  document.getElementById('root')
);