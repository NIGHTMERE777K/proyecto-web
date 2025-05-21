import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormularioRegistro from './components/FormularioRegistro'
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <FormularioRegistro />
      <Login />
    </div>
  );
}


export default App
