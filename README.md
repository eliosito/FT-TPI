<p align="center">
  <img src="public/logo.jpg" alt="WickHub Logo" width="180">
</p>

#  Fronted de Wickhub (TPI)

Pagina web para organizadoras y clientes, que permite la gestion y comercializacion de entradas a eventos, permitiendo a los clientes compras remotas dentro de esta.

## Integrantes

- [Benjamin Mancilla](https://www.github.com/benyiaminoo)
- [Elio Villarroel](https://github.com/eliosito)

---

## Descripción del proyecto

WickHub es una plataforma web diseñada para facilitar la gestión y organización de establecimientos dedicados a eventos, como boliches y discotecas.

El sistema permite a los organizadores administrar sus eventos, gestionar la venta de entradas y productos, controlar las operaciones comerciales y mantener informados a sus clientes mediante publicaciones.

Además, cuenta con diferentes niveles de acceso para que cada usuario pueda utilizar las funcionalidades correspondientes a su rol dentro de la plataforma.

## Características principales

### Gestión de eventos

- Crear, editar y administrar eventos.
- Establecer información general, como título, descripción e imagen.
- Configurar los tipos de entradas y sus respectivos precios.
- Administrar la información de cada evento.

### Gestión de entradas

- Administrar los tipos y cantidades de entradas.
- Registrar entradas vendidas.
- Consultar entradas disponibles, vendidas y canceladas.
- Gestionar el estado de las entradas.
- Identificar las entradas mediante códigos únicos.

### Publicaciones

- Crear y administrar publicaciones.
- Compartir novedades e información relevante.
- Mantener informados a los clientes sobre las actividades del establecimiento.

### Gestión de RRPP (Relacionistas Públicos)

- Se agregan por invitación.
- Editar los datos de eventos.
- Eliminar cuentas de empleados.
- Administrar los permisos de acceso según el rol.

### Gestión de ventas

- Registrar ventas de entradas y productos.
- Gestionar ventas realizadas en efectivo.
- Consultar información de las ventas registradas.

## Roles del sistema

WickHub contempla diferentes roles para organizar el acceso a las funcionalidades de la plataforma.

### WickHub: Clientes

| Rol           | Responsabilidades                                                                      |
| ------------- | -------------------------------------------------------------------------------------- |
| SuperUsuario  | Capacidad de Eliminar Logicamente, Ocultar y Editar cualquier contenido.               |
| Usuario       | Consultar eventos, acceder a publicaciones y adquirir entradas y productos.            |

### WickHub: Organizaciones
| Rol           | Responsabilidades                                                                      |
| ------------- | -------------------------------------------------------------------------------------- |
| SuperUsuario  | Capacidad de Eliminar Logicamente, Ocultar y Editar cualquier contenido.               |
| Administrador | Gestionar el establecimiento, eventos, productos, entradas, publicaciones y empleados. |
| RPP           | Realizar operaciones autorizadas, como ventas y gestión de entradas.                   |
| Especificos   | Dependiendo las necesidades de la Organizacion                                         |

*Los permisos específicos de cada rol dependerán de la configuración final del sistema.*

## Tecnologías utilizadas

Las siguientes tecnologías corresponden a la implementación frontend y deberán complementarse con las tecnologías definitivas del backend.

### Frontend

- React
- JavaScript
- CSS

### Backend

- Node
- Express

### Base de datos

- PhpMyAdmin
- MariaDB

### Herramientas de desarrollo

- Git
- GitHub
- Visual Studio Code


## Capturas de pantalla


### Panel de administración



### Gestión de eventos



### Gestión de entradas



### Página de clientes