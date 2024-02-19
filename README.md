# Prueba técnica senior mobile

Esta es una pruena técnica para evaluar las capacidades y habilidades de desarrolladores React Native de nivel senior. Para esto, se han destinado varios ejercicios donde es necesario tanto arreglar problemas, ordenar el desorden de algunos componentes, maquetear con diseño, optimizar para performance, refactorizar la navegación y el desarrollo de módulos nativos.

<img width="289" alt="image" src="https://github.com/agendapro/SeniorTestMobile/assets/102041608/338a10c9-ada5-4f02-8cb8-c1825114fa0a">

<img width="231" alt="image" src="https://github.com/agendapro/SeniorTestMobile/assets/102041608/76980e77-9155-44f8-b81f-7a8ba44570f9">

![iPhone 13 Pro](https://github.com/agendapro/SeniorTestMobile/assets/104234396/eff9e5fd-b243-48ed-9b8a-089e528cd01d)


El periodo de desarrollo para este ejercicio es de 5 días desde su recepción. Si la prueba es enviada fuera de plazo, el candidato será descalificado y no continuará en el proceso de selección.

Para comenzar con tu trabajo, debes crear una rama con tu nombre y apellido. Ejemplo: `interview/juan-perez` y realizar los commits en esta. Realiza tus commits de forma progresiva como lo harías en tu día a día.

## Requerimientos:

### Refactoriza la navegación:

- [ ] Debes crear una navegación de tipo BottomTab, en la cual existan dos rutas: Personajes y Ajustes.
- [ ] La ruta de Personajes debe consistir de la actual HomeScreen con un nombre más descriptivo y una pantalla nueva para el detalle del personaje, pantallas cuales deben estar agrupadas en un Stack Navigator.
- [ ] La ruta de ajustes debe consistir en una pantalla individual.

### Pantalla de Personajes

Se necesita listar los personajes de la famosa serie de películas "Star Wars". Donde se mostrarán todos los personajes de la franquicia, además de mostrar la información personal de cada uno de ellos (estatura, color de pelo, etc).

- [ ] Maqueta según el diseño solicitado
- [ ] El listado de personajes debe listar todos los personajes de la franquicia de manera "infinita".
- [ ] Es necesario optimizar la aplicación lo más posible bajo las buenas practicas con React native
- [ ] Se debe implementar las interfaces con la siguiente API : https://swapi.dev/documentation.
- [ ] Debes optimizar para performance usando useMemo, useCallback o memo según corresponda.
- [ ] Debes pasar por parámetro [...] <- Gabo aquí

### Pantalla de detalle del personaje

- [ ] Maqueta según el diseño solicitado
- [ ] los iconos se deben mostrar de la siguiente forma : 
  - si el genero del personaje es masculino, se debe mostrar el simbolo masculino, lo mismo para el genero femenino. En caso de que el personaje no tenga genero, de mostrarse el test "N/A"
  - si el personaje ha pilotado alguna nave espacial, debe mostrar el icono de nave. de lo contrario debe mostrarse el text "N/A"
  - si el personaje ha aparecido en más de 3 peliculas de la franquicia, debe mostrarse el icono de pulgar arriba, sino mostrar el icono de pulgar abajo
- [ ] Recibir por parámetro [...] <- Gabo aquí

### Pantalla de ajustes

- [ ] Maqueta según el diseño solicitado
- [ ] El componente de batería debe consistir de un card con 100 Views que represente de forma visual con color verde la batería actual del dispositivo
- [ ] Arregla los problemas que hay en el módulo nativo DeviceInfoModule que se encuentra en la carpeta iOS. Hay 1 error en `ios/DeviceInfoModule.m`, 1 error en `ios/DeviceInfoModule-Bridging-Header.h`
- [ ] Extrae las variables batería, modelo y sistema operativo desde el contexto de ejecución nativo.

Buena suerte potencial compañero!
