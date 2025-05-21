import React, {useState} from 'react';
import './Estilos.css';


const FormularioRegistro = () =>{

    const [datos, setDatos] = useState({
        nombre: '',
        correo: '', 
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
            <h2>Formulario de Registro</h2>
            
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
                <label > Correo: </label>
                <input 
                type="email"
                name='correo'
                value={datos.correo}
                onChange={manejarCambio}
                required
                placeholder='PepitoPerez@outlook.com'
                
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
            
            <button>Enviar</button>

            <div>
    <label className='Ya-tienes-cuenta'>¿Ya tienes una cuenta? </label>
        <a href="iniciar-sesion.html">Iniciar sesión</a>
    </div>


        </form>



    );

};
export default FormularioRegistro;