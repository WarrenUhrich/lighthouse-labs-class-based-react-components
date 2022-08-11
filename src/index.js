import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import FunctionalCounter from './components/FunctionalCounter';

ReactDOM.render(
  <React.StrictMode>
    <h1>Class Components Practice</h1>
    <FunctionalCounter />
  </React.StrictMode>,
  document.getElementById('root')
);
