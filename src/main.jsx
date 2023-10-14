import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import VisitorSlice from './reducers/VisitorSlice.jsx';

const store = configureStore({
  reducer: {
    visitor: VisitorSlice
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
