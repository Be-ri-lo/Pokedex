Desafío - Pokédex
● Para realizar este desafío debes haber estudiado previamente todo el material
disponibilizado correspondiente a la unidad.
● Una vez terminado el desafío, comprime la carpeta y sube el .zip
Descripción
Este desafío consiste en consumir datos desde la Poké API para generar una pokédex a
través del uso de peticiones AJAX. Para ello, es posible hacer uso de la URL
https://pokeapi.co/api/v2/pokemon/. Esta URL, tal y como muestra la documentación de
Poke API, entre como resultado un objeto JSON con los primeros 20 pokémon de la
pokédex. Además, posee un atributo que contiene la URL a consultar para obtener los
siguientes 20 pokémon.
_ 1
www.desafiolatam.com
Instrucciones
La pokédex a construir debe cumplir con lo siguiente:
1. Al cargar la página, se debe mostrar un listado con los nombres de los primeros 20
pokémon.
2. Debe existir un botón llamado '¡Quiero ver más pokémon!' al final del listado que
traiga los siguientes 20 pokémon.
3. (Opcional) Cada pokémon se debe mostrar en una tarjeta de Bootstrap.
4. Junto al nombre de cada pokémon, debe existir un botón llamado '¡Quiero saber más
de este pokémon!' para ver más información del pokémon.
5. Al hacer click sobre el botón '¡Quiero saber más de este pokémon!', se debe
desplegar un modal con la siguiente información: Nombre, tipo, generaciones
(obtenidas a partir de la URL del tipo de pokémon), habilidades y los primeros 5
movimientos.
Para este desafío sólo se puede utilizar jQuery, por lo que se excluye el uso de la Fetch API.
No es necesario crear un proyecto RoR para este desafío.
