import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import { CalcProvider } from './context/ContextCalculator';
import App from './App';


ReactDOM.render(
  <CalcProvider>
    <App />
  </CalcProvider>,
  document.getElementById('root')
);


