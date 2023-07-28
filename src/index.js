import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap
 

ReactDOM.render(<App />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode> //bu iki kez yazdırdı 
    <App />
  //</React.StrictMode>
);
 
reportWebVitals();
