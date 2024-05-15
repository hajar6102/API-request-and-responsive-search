import React from 'react';               //import the (React) we can name it whatever we want library from the react package.
import ReactDOM from 'react-dom/client'; // reactDOM means it just for borwsers bc we use react for different purposes as you know.
import './index.css';
import App from './containers/App'; 
import 'tachyons';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();