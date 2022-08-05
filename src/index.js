import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ----------------- Redux -------------------
import { Provider } from "react-redux";
import storeConfig, { saga } from "./store/storeConfig"; 
import sagas from './store/middlewares/sagas'

const store = storeConfig()

// then run the saga
saga.run(sagas)
// ----------------- Redux -------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/** Redux */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
