-- Crea una tabla
CREATE TABLE users(
	nombre VARCHAR(50) NOT NULL,
	email VARCHAR(50) UNIQUE,
	edad INT,
	id_usuario SERIAL,
	PRIMARY KEY(id_usuario)
);

-- Inserta un dato en la tabla
INSERT INTO users(nombre, edad)
	VALUES (
		'Juanita',
		27
	);

-- Selecciona todo de una tabla
-- Siempre debo correr este comando para visualizar los datos nuevos insertados
SELECT * FROM users;

-- Elimina una tabla
DROP TABLE users;

-- Elimina un dato de una tabla
DELETE FROM users WHERE id_usuario = 2

