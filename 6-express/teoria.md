# Guía de Estudio: Express.js

## ¿Qué es Express.js?

Express.js es un framework web para Node.js que simplifica la creación de aplicaciones web y APIs. Utiliza el lenguaje JavaScript y proporciona un conjunto de herramientas para manejar rutas, manejo de peticiones y respuestas, middleware, y mucho más.

## Por qué aprender Express.js

- **Simplicidad y Flexibilidad:** Express.js es conocido por su enfoque minimalista y su capacidad para adaptarse a una variedad de proyectos web, desde aplicaciones pequeñas hasta proyectos más grandes y complejos.

- **Amplia Comunidad:** Dado su uso generalizado, Express.js cuenta con una comunidad activa y abundante documentación, lo que facilita encontrar ayuda y recursos en línea.

- **Rápido Desarrollo:** La estructura simple de Express.js y su conjunto de características permiten un desarrollo rápido y eficiente de aplicaciones.

## Consulta y Uso de la Documentación Oficial

La documentación oficial de Express.js es una fuente valiosa de información para aprender y resolver problemas. Aquí hay algunos pasos para utilizarla efectivamente:

1. **Sitio Web Oficial:** Visita el [sitio web de Express.js](https://expressjs.com/) para acceder a la documentación oficial.

2. **API Reference:** Explora la [API reference](https://expressjs.com/en/5x/api.html) para conocer los métodos y objetos proporcionados por Express.js.

3. **Guías y Tutoriales:** La sección de [guías](https://expressjs.com/en/guide) ofrece tutoriales paso a paso sobre varios aspectos de Express.js.

4. **Ejemplos de Código:** Examina los [ejemplos de código](https://expressjs.com/en/starter/examples.html) para comprender cómo implementar diferentes funcionalidades.

## Instalación de Express.js

Sigue estos pasos para instalar Express.js en tu proyecto:

1. Abre tu terminal y navega hasta la carpeta de tu proyecto.

2. Ejecuta el siguiente comando para inicializar un archivo `package.json` si aún no tienes uno:

```
npm init -y
```

3. Instala Express.js usando npm:
```
npm install express
```


4. En tu archivo JavaScript, importa Express.js:
```javascript
const express = require('express');
const app = express();
```



## Objetos `req` y `res`

Cuando se trabaja con frameworks de desarrollo web en Node.js, como Express.js, los objetos `req` y `res` son comunes. `req` representa la solicitud HTTP entrante y `res` es la respuesta que se enviará al cliente.

## Endpoints (Rutas)

Los endpoints, también conocidos como rutas, son las URLs específicas a las que se puede acceder en una API. Cada endpoint generalmente corresponde a una acción específica en el servidor.

Referencias:
- [Documentación de Express.js](https://expressjs.com/)

## Status Codes

Los códigos de estado HTTP son códigos numéricos que indican el resultado de una solicitud HTTP. Son útiles para comprender el estado de una respuesta y cómo se procesó la solicitud.

Referencias:
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [REST API Status Codes](https://www.restapitutorial.com/httpstatuscodes.html)

## Parámetros (Params) y Consultas (Queries)

Los parámetros y las consultas son formas de enviar datos a través de una URL en una solicitud HTTP. Los parámetros generalmente se utilizan para identificar un recurso específico, mientras que las consultas se utilizan para filtrar o paginar datos.

## Cómo Recibir el Body de una Petición

El cuerpo de una solicitud HTTP contiene datos que se envían al servidor, generalmente en formato JSON. Para recibir y procesar el cuerpo de una solicitud, puedes usar bibliotecas como `body-parser` (Express.js) o simplemente acceder a `req.body` en frameworks más modernos.


### Glosario:

- **Framework:** Un conjunto de herramientas y reglas que facilitan el desarrollo de software al proporcionar una estructura predefinida.
- **Middleware:** Funciones que se ejecutan entre el proceso de recepción de una solicitud y el envío de una respuesta en una aplicación web.
- **API:** Interfaz de Programación de Aplicaciones, que define cómo los componentes de software deben interactuar.
- **npm:** Node Package Manager, una herramienta para administrar paquetes y dependencias de Node.js.
- **req**: Objeto que representa la solicitud HTTP entrante (request).
- **res**: Objeto que representa la respuesta HTTP que se enviará al cliente (response).
- **Endpoint**: Una URL específica en una API que corresponde a una acción en el servidor.
- **Status Codes**: Códigos numéricos en respuestas HTTP que indican el resultado de una solicitud.
- **Parámetros (Params)**: Valores variables en la URL que identifican un recurso.
- **Consultas (Queries)**: Parámetros en la URL utilizados para filtrar, ordenar o paginar datos.
- **Cuerpo de la Petición (Request Body)**: Datos enviados al servidor en una solicitud HTTP, generalmente en formato JSON.

¡Espero que esta guía te sea útil para entender los conceptos básicos de la creación de APIs en Node.js y Express.js en GitHub!

---