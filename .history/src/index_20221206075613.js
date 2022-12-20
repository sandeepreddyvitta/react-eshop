import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer, { initialState } from './components/data/reducer';
import { StateProvider } from './components/data/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StateProvider initialState={initialState} reducer={rootReducer}> */}
    <h1>Test tetst</h1>
    <App />
    {/* </StateProvider> */}
  </React.StrictMode>
);


reportWebVitals();