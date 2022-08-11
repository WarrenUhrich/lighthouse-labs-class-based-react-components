import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import FunctionalCounter from './components/FunctionalCounter';
import ClassCounter from './components/ClassCounter';

ReactDOM.render(
  <React.StrictMode>
    <h1>Class Components Practice</h1>
    <FunctionalCounter heading="This is our Functional Counter" />
    <ClassCounter heading="This is our Class-Based Counter" />
  </React.StrictMode>,
  document.getElementById('root')
);
