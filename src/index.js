import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import FunctionalCounter from './components/FunctionalCounter';
import ClassCounter from './components/ClassCounter';
import FunctionalToDo from './components/FunctionalToDo';
import ClassToDo from './components/ClassToDo';
import FunctionalAPIFetch from './components/FunctionalAPIFetch';
import ClassAPIFetch from './components/ClassAPIFetch';

ReactDOM.render(
  <React.StrictMode>
    <h1>Class Components Practice</h1>
    <ClassAPIFetch />
    <FunctionalAPIFetch />
    <ClassToDo heading="Our Class-Based To-Dos!" />
    <FunctionalToDo heading="Our Functional To-Dos!" />
    <FunctionalCounter heading="This is our Functional Counter" />
    <ClassCounter heading="This is our Class-Based Counter" />
  </React.StrictMode>,
  document.getElementById('root')
);
