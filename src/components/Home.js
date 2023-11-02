import React from 'react';
import './Home.css';

function Home(props) {
  const nombreUsuario = props.match.params.nombre;

  return (
    <div>
      <h2>Bienvenido, {nombreUsuario}</h2>
    </div>
  );
}

export default Home;
