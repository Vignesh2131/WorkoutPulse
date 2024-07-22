import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { WorkoutContextProvider } from './context/WorkoutReducer.jsx'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WorkoutContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WorkoutContextProvider>
  </React.StrictMode>
);
