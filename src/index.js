import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FunctionalCounter from './components/FunctionalCounter';
import ClassCounter from './components/ClassCounter';

ReactDOM.render(
  <React.StrictMode>
    <FunctionalCounter heading="Functional Counter" />
    <ClassCounter heading="Class Counter"/>
  </React.StrictMode>,
  document.getElementById('root')
);
