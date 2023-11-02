import React, { Component } from 'react';
import axios from 'axios';
import './Register.css';

class Register extends Component {
  state = {
    tipoDocumento: '',
    rol: '',
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: '',
    mensaje: '',
  };

  handleRegistro = () => {
    const {
      tipoDocumento,
      rol,
      nombre,
      apellido,
      correo,
      contrasena,
      confirmarContrasena,
    } = this.state;

    if (contrasena !== confirmarContrasena) {
      this.setState({ mensaje: 'Las contraseñas no coinciden' });
      return;
    }

    // Realizar la solicitud POST al servidor Node.js en el puerto 5000
    axios.post('http://localhost:5000/register', {
      tipoDocumento,
      rol,
      nombre,
      apellido,
      correo,
      contrasena,
      confirmarContrasena,
    })
      .then((response) => {
        console.log(response.data);
        // Aquí puedes manejar la respuesta del servidor, como mostrar un mensaje de éxito
        this.setState({ mensaje: 'Registro exitoso' });
      })
      .catch((error) => {
        console.error('Error al registrar usuario:', error);
        // Aquí puedes manejar los errores, como mostrar un mensaje de error
        this.setState({ mensaje: 'Error al registrar usuario' });
      });
  };

  render() {
    return (
      <div className='register-main'>

      
      <div className='register-data'>
        <h1>Regístrese</h1>
        <div className='user-data'>
        <input type="text" placeholder="Tipo de documento" onChange={(e) => this.setState({ tipoDocumento: e.target.value })} />
        <input type="text" placeholder="Rol" onChange={(e) => this.setState({ rol: e.target.value })} />
        <input type="text" placeholder="Nombre" onChange={(e) => this.setState({ nombre: e.target.value })} />
        <input type="text" placeholder="Apellido" onChange={(e) => this.setState({ apellido: e.target.value })} />
        <input type="email" placeholder="Correo" onChange={(e) => this.setState({ correo: e.target.value })} />
        <input type="password" placeholder="Contraseña" onChange={(e) => this.setState({ contrasena: e.target.value })} />
        <input type="password" placeholder="Confirmar Contraseña" onChange={(e) => this.setState({ confirmarContrasena: e.target.value })} />
        <button onClick={this.handleRegistro}>Registrar</button>
        <p>{this.state.mensaje}</p>
        </div>
      </div>
      </div>
    );
  }
}

export default Register;
