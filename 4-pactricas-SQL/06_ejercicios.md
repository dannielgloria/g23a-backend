# Ejercicio 1: LIMIT y OFFSET

Objetivo: Practicar el uso de las cláusulas LIMIT y OFFSET para paginar y limitar resultados en consultas SQL.

## Instrucciones:

- Escribe una consulta SQL que seleccione los primeros 5 productos de la tabla productos.

```SQL
SELECT * FROM productos LIMIT 10;
```

- Escribe otra consulta SQL que seleccione los siguientes 5 productos, es decir, los productos del 6 al 11.

```SQL
SELECT * FROM productos LIMIT 5 OFFSET 5;
```

- Utiliza la cláusula OFFSET y LIMIT para obtener los siguientes conjuntos de 5 productos, como 11 al 15, 16 al 20, y así sucesivamente.

```SQL
SELECT * FROM productos LIMIT 5 OFFSET 10;
```

# Ejercicio 2: WHERE, BETWEEN, IN, LIKE, IS NULL, ORDER BY, DISTINCT, GROUP BY y HAVING

Objetivo: Practicar el uso de diversas cláusulas y operadores en consultas SQL.

## Instrucciones:

- Escribe una consulta SQL que seleccione todos los productos cuyo precio unitario esté entre $100 y $200.

```SQL
SELECT * FROM productos WHERE precio_unidad BETWEEN 100 AND 200;
```

- Escribe una consulta SQL que seleccione todos los productos cuyo proveedor sea 'Nestlé' o 'Sancor'.
- 
```SQL
SELECT * FROM productos WHERE marca='Nestl�' OR marca='Sancor';

SELECT * FROM productos WHERE id_proveedor IN (1,3);

SELECT * FROM productos WHERE marca IN ('Nestl�','Sancor');
```

- Escribe una consulta SQL que seleccione todos los productos cuyo nombre contenga la palabra 'Gaseosa'.

```SQL
SELECT * FROM productos WHERE nombre LIKE '%Gaseosa%';

SELECT * FROM productos WHERE grupo='Gaseosas';
```

- Escribe una consulta SQL que seleccione todos los productos que no tengan una imagen asociada (campo imagen sea NULL).
  
```SQL
SELECT * FROM productos WHERE imagen IS NULL;
```

- Escribe una consulta SQL que seleccione los productos ordenados por su precio unitario de forma descendente.

```SQL
SELECT * FROM productos ORDER BY precio_unidad DESC;
```

- Escribe una consulta SQL que seleccione los nombres de proveedores únicos de la tabla proveedores.

```SQL
SELECT * FROM productos ORDER BY precio_unidad DESC;
```

- Escribe una consulta SQL que cuente cuántos productos pertenecen a cada grupo (grupo) de la tabla productos.

```SQL
SELECT grupo, COUNT(*) as cantidad FROM productos
GROUP BY grupo;
```

- Escribe una consulta SQL que seleccione los grupos (grupo) de productos cuya cantidad total en stock sea mayor a 1000.

```SQL
SELECT grupo, SUM(stock) as cantidad_total FROM productos
GROUP BY grupo
HAVING SUM(stock) > 1000;
```

# Ejercicio 3: Aliasing y Subqueries

Objetivo: Practicar el uso de alias y subconsultas en consultas SQL.

## Instrucciones:

- Escribe una consulta SQL que muestre el nombre y el precio unitario de los productos con un alias "Nombre" y "Precio" respectivamente.

- Escribe una consulta SQL que muestre el nombre y el total de ventas de cada producto en la tabla productos, utilizando una subconsulta.


# Ejercicio 4: INNER JOIN, LEFT JOIN y FULL OUTER JOIN
Objetivo: Practicar el uso de diferentes tipos de joins en consultas SQL.

## Instrucciones:

- Escribe una consulta SQL que muestre los nombres de los productos y los nombres de los proveedores para los productos existentes en la tabla productos y sus correspondientes proveedores en la tabla proveedores.

- Escribe una consulta SQL que muestre todos los clientes y sus compras (si las tienen), incluyendo los clientes que no hayan realizado ninguna compra.

- Escribe una consulta SQL que muestre todos los productos y sus ventas (si los tienen), incluyendo los productos que no han sido vendidos.

- Escribe una consulta SQL que muestre los nombres de los productos y sus proveedores, incluyendo todos los productos y proveedores, incluso aquellos sin productos asociados.