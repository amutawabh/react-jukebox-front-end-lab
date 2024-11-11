import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// src/App.jsx

const App = () => {
  return <h1>Hello world!</h1>;
};

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

export default App
