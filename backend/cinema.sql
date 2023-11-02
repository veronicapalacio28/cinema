CREATE DATABASE cinema;

USE cinema;

CREATE TABLE Usuario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo_documento VARCHAR(255),
  rol VARCHAR(255),
  nombre VARCHAR(255),
  apellido VARCHAR(255),
  correo VARCHAR(255) UNIQUE NOT NULL,
  contrasena VARCHAR(255) NOT NULL,
  confirmar_contrasena VARCHAR(255) NOT NULL
);
