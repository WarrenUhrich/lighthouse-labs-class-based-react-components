import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FunctionalCounter from './components/FunctionalCounter';
import ClassCounter from './components/ClassCounter';
import ClassIntervalCounter from './components/ClassIntervalCounter';

ReactDOM.render(
  <React.StrictMode>
    <ClassIntervalCounter />
    <ClassCounter heading="Class Counter"/>
    <FunctionalCounter heading="Functional Counter" />
  </React.StrictMode>,
  document.getElementById('root')
);
