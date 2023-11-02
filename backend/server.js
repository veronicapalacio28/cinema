const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

// Configura el middleware CORS para permitir solicitudes desde el puerto 3000 (tu aplicación React)
app.use(cors({ origin: 'http://localhost:3000' }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Contraseña de tu base de datos
  database: 'cinema',
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

// Ruta POST para el registro de usuarios
app.post('/register', (req, res) => {
  const {
    tipoDocumento,
    rol,
    nombre,
    apellido,
    correo,
    contrasena,
    confirmarContrasena,
  } = req.body;

  if (contrasena !== confirmarContrasena) {
    return res.status(400).json({ error: 'Las contraseñas no coinciden' });
  }

  const sql = 'INSERT INTO Usuario (tipo_documento, rol, nombre, apellido, correo, contrasena) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [tipoDocumento, rol, nombre, apellido, correo, contrasena], (err) => {
    if (err) {
      console.error('Error al registrar usuario:', err);
      res.status(500).json({ error: 'Error al registrar usuario' });
    } else {
      res.json({ message: 'Registro exitoso' });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
