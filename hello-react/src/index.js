// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom'
// const App = () => {
//   console.log("Whee")

//   const date = new Date()
//   const a = 34
//   const b = 17

//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//     'p', null, 'Hello React, danas je ', date.toString()
//     ),
//     React.createElement(
//     'p', null, a, ' + ', b, ' = ', a + b
//     )
//   )
// }
 
// ReactDOM.render(
// React.createElement(App, null),
// document.getElementById('root')
// )

const Hello = (props) => {
  const godRod = () => {
    const thisYear = new Date().getFullYear()
    return thisYear - props.god
  }
  return (
  <div>
  <p>Hello {props.ime}, imaš {props.god} godina.</p>
  <p>Born {godRod()}?</p>
  </div>
  )
}
 
const App = () => {
  const god = 17
  return (
  <div>
  <h1>Pozdravi</h1>
  <Hello ime="Bruna" god={21}/>
  <Hello ime="Emma" god={god}/>
  <Hello ime="Barbara" god={god+6}/>
  </div>
  )
}
 
ReactDOM.render(<App />, document.getElementById('root')) 