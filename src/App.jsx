import { useState } from 'react';
import './App.css';
import FormularioRegistro from './components/FormularioRegistro';
import Login from './components/Login';
import './components/Estilos.css';

function App() {
  const [formActivo, setFormActivo] = useState('registro');

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
