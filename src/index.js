import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import FunctionalCounter from './components/FunctionalCounter';
import ClassCounter from './components/ClassCounter';
import FunctionalToDo from './components/FunctionalToDo';

ReactDOM.render(
  <React.StrictMode>
    <h1>Class Components Practice</h1>
    <FunctionalToDo heading="Our Functional To-Dos!" />
    <FunctionalCounter heading="This is our Functional Counter" />
    <ClassCounter heading="This is our Class-Based Counter" />
  </React.StrictMode>,
  document.getElementById('root')
);
