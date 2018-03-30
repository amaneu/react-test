import React from 'react';
import ReactDOM from "react-dom";
import App from "./component/App";
import './main.css';

console.log('entry point');

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Jan',
  lastName: 'Kowalski'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
