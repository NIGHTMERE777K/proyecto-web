import React, {useState} from 'react';
import './Estilos.css';


const Login = () =>{

    const [datos, setDatos] = useState({
        nombre: '',
        
        clave: '',
        
    });

    const manejarCambio = (evento) => {
        setDatos({
        ...datos,
        [evento.target.name]: evento.target.value
        });
    };

    const ManejarEnvio =(evento) => {
        evento.preventDefault();
        console.log('Dtos enviados:', datos)

    };

    return(
        
        <form  onSubmit={ManejarEnvio} className='Formulario'>
            <h2>Formulario de Inicio de Sesion</h2>
            
            <div>
                <label > Nombre: </label>
                <input 
                type="text"
                name='nombre'
                value={datos.nombre}
                onChange={manejarCambio}
                required
                maxLength='50'
                placeholder='Pepito Perez'
            
                
                />
            </div>

            

        
            <div>
                <label > clave: </label>
                <input 
                type="password"
                name='clave'
                value={datos.clave}
                onChange={manejarCambio}
                required
                maxLength='10'
                placeholder='Pepito123'
                
                />
            </div>
            
            <button>Iniciar Sesion</button>

            <div>
    <label className='Ya-tienes-cuenta'>¿A un no tienes una cuenta? </label>
        <a href="iniciar-sesion.html">Registrarme</a>
    </div>


        </form>



    );

};

export default Login;