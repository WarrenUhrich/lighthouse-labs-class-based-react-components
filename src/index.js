import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Hello from './components/Hello.Class';

import Counter from './components/Counter';
import ClassCounter from './components/Counter.Class';
import ToDoList from './components/ToDoList';
import ClassToDoList from './components/ToDoList.Class';
import WeatherInfo from './components/WeatherInfo';
import ClassWeatherInfo from './components/WeatherInfo.Class';

ReactDOM.render(
  <React.StrictMode>
    <ClassWeatherInfo />
    <WeatherInfo />
    <ClassToDoList heading="Class-Based To-Do List" />
    <ToDoList heading="Functional To-Do List" />
    <ClassCounter name="Class Button" />
    <Counter name="Functional Button" />
    <Hello name="Patty" />
    <Hello name="Rico" />
    <Hello name="World" />
  </React.StrictMode>,
  document.getElementById('root')
);
