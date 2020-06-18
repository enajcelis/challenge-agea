# Evaluación técnica Desarrollador frontend

Crear una page responsive con HTML, CSS y JavaScript manteniendo la estructura de un boceto
y cumpliendo los puntos indicados. Para el mismo, se puede utilizar cualquier texto, imagen y video.

# Librerías

* [Bootstrap](https://getbootstrap.com/) 
* [Fingerprintjs2](https://github.com/Valve/fingerprintjs2)
* [lazysizes](https://github.com/aFarkas/lazysizes#readme)
* [jQuery](https://jquery.com/)

# Consideraciones de la implementación

La página usa el sistema de cuadrículas o grid de **Bootstrap v4.1.3** para que el contenido de la página sea responsive y se adapte a los bocetos requeridos pra la evaluación. 

Se incluye la librería **lazysizes** para lograr el lazy load de imágenes, en los casos en que el navegador no lo soporte. En caso contrario, se usa el lazy-loading nativo del navegador. La implementación se encuentra en **js/lazy-load.js**.

Los eventos para mostrar y reproducr el video de Youtube son logrados mediante el uso de JavaScript, definidos en el archivo **js/player.js**. 

Se realiza la petición post requerida usando el método post() de **jQuery**. La URL usada para ello es: [https://swapi.dev/api/people/2/](https://swapi.dev/api/). Cabe destacar, que genera error debido a que el método post no es el esperado por éste API. Según lo establecido en la evaluación, no se espera que funcione esta petición post.

El script de trackeo de usuarios se encuentra en **js/tracking** (en adición de la petición post anterior). Aquí se usa la librería **Fingerprintjs2** para la generación del hash de los usuarios que visitan la página. El hash es almacenado en el Local Storage, bajo el key hash.

Los estilos propios de la página se definen en **css/main.css**.

Las imágenes se encuentan en el directorio **images**.

## Autor

* **Jane Celis** - (https://www.linkedin.com/in/jane-celis)
