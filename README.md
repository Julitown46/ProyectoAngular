# ProyectoCliente
Proyecto de la segunda evaluación de Desarrollo Web en Entorno Cliente.

## Estructura del Proyecto
Este proyecto está diseñado para gestionar empresas y videojuegos a través de funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar). A continuación, se detalla la estructura de archivos y carpetas:

### Raíz del proyecto (ProyectoCliente/)
- `package.json`: Contiene las dependencias y scripts necesarios para el proyecto.
- `README.md`: Documentación del proyecto.

### Carpeta principal del proyecto (`src/`)
Contiene los archivos y carpetas principales de la aplicación.

- `index.html`: Página de inicio que enlaza con las funcionalidades principales (gestión de empresas y videojuegos).
- `main.js`: Archivo JavaScript principal, donde se define la lógica global de la aplicación.

### Subcarpetas en `src/app`

#### `components/`
- **`empresa/`**: Funcionalidades relacionadas con empresas
  - `crear-empresa/`: Componente para la creación de empresas.
  - `detalle-empresa/`: Componente para ver detalles de una empresa.
  - `editar-empresa/`: Componente para editar empresas.
  - `listar-empresas/`: Componente para listar empresas.
- **`videojuego/`**: Funcionalidades relacionadas con videojuegos
  - `crear-videojuego/`: Componente para la creación de videojuegos.
  - `editar-videojuego/`: Componente para editar videojuegos.
  - `listar-videojuegos/`: Componente para listar videojuegos.
- **Otros componentes**:
  - `entrada/`: Componente de entrada principal.
  - `mapa/`: Componente de visualización de mapa.
  - `nav-bar/`: Barra de navegación.

#### `models/`
Contiene los modelos de datos utilizados en la aplicación.
- `empresa.ts`: Define la estructura de una empresa.
- `videojuego.ts`: Define la estructura de un videojuego.

#### `services/`
Contiene los servicios que gestionan la lógica de negocio y comunicación con la API o almacenamiento de datos.
- `empresa.service.ts`: Servicio para la gestión de empresas.
- `empresa.service.spec.ts`: Pruebas unitarias del servicio de empresas.
- `videojuego.service.ts`: Servicio para la gestión de videojuegos.
- `videojuego.service.spec.ts`: Pruebas unitarias del servicio de videojuegos.

## Cómo navegar por el proyecto
- **Inicio**: Ejecuta la aplicación Angular para acceder a la página principal.
- **Empresas**: Usa los componentes dentro de `src/app/components/empresa/` para gestionar empresas.
- **Videojuegos**: Usa los componentes dentro de `src/app/components/videojuego/` para gestionar videojuegos.

## Cómo iniciar por el proyecto
Cuando lo descargas tienes que seguir estos comandos:
- `Instalar node_modules`: npm install
- `Iniciar las bases de datos y el cliente`: npm run start2

Con estos dos comandos, ya se iniciaria todo en el puerto 4200.