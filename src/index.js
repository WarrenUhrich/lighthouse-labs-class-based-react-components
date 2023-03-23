import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import FunctionalCounter from './components/FunctionalCounter';
import ClassCounter from './components/ClassCounter';

import FunctionalToDoList from './components/FunctionalToDoList';
import ClassToDoList from './components/ClassToDoList';

import FunctionalAPIExample from './components/FunctionalAPIExample';
import ClassAPIExample from './components/ClassAPIExample';

ReactDOM.render(
  <React.StrictMode>
    <ClassAPIExample />
    <FunctionalAPIExample />
    <FunctionalToDoList />
    <ClassToDoList />
    <FunctionalCounter heading="This is a Functional Counter" />
    <ClassCounter heading="This is a Class-Based Counter" />
  </React.StrictMode>,
  document.getElementById('root')
);
