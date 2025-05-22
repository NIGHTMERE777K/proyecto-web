import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormularioRegistro from './components/FormularioRegistro'
import Login from './components/Login';


function App() {
  const [formActivo, setFormActivo] = useState('registro'); // Estado inicial

  return (
    <div className="container">
      <div
        className={`formulario ${formActivo === 'registro' ? 'activo' : 'inactivo'}`}
        onClick={() => setFormActivo('registro')}
      >
        <FormularioRegistro />
      </div>

      <div
        className={`formulario ${formActivo === 'login' ? 'activo' : 'inactivo'}`}
        onClick={() => setFormActivo('login')}
      >
        <Login />
      </div>
    </div>
  );
}

export default App;
