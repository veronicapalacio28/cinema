import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate(); // Obtiene la función de navegación

  const handleInicioSesion = () => {
    // Realiza una solicitud POST para verificar las credenciales en el servidor
    axios.post('http://localhost:5000/login', {
      correo,
      contrasena,
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          // Si las credenciales son válidas, redirige al usuario al componente "home" utilizando navigate
          navigate('/home');
        }
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error);
      });
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <input type="email" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
      <button onClick={handleInicioSesion}>Iniciar Sesión</button>
    </div>
  );
};

export default Login;
