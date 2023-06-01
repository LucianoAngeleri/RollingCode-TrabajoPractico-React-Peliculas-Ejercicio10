# Trabajo Práctico de React
## Ejercicio 10 - Alta de Películas

Este proyecto es una aplicación web desarrollada en **React** que permite dar de alta películas a través de un formulario y mostrarlas en una tarjeta.

## Autor

El proyecto fue creado por [César Luciano Angeleri](https://www.linkedin.com/in/cesar-luciano-angeleri/) como parte de un trabajo práctico de React para RollingCode School.

## Tecnologías utilizadas

El proyecto utiliza las siguientes tecnologías y herramientas:

- React
- JavaScript
- HTML
- CSS
- Bootstrap
- Node.js
- npm

## Instalación

Sigue los siguientes pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio en tu máquina local o descarga el archivo ZIP.
2. Abre una terminal y navega hasta la carpeta raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

    ```
    npm install
    ```

## Ejecución

Después de haber instalado las dependencias, sigue los siguientes pasos para ejecutar el proyecto:

1. En la misma terminal, ejecuta el siguiente comando para iniciar la aplicación:

    ```
    npm run dev
    ```

2. Abre tu navegador web y ve a la dirección que aparece en la terminal, que debe ser algo como esto:

    ```
    http://localhost:5173/
    ```

## Estructura de archivos

El proyecto se compone de los siguientes archivos:

- `App.jsx`: Componente principal que renderiza la aplicación.
- `FormularioPeliculas.jsx`: Componente que contiene el formulario para dar de alta películas y muestra las películas guardadas.
- `CardPelicula.jsx`: Componente que muestra una tarjeta con los detalles de una película.

## Funcionamiento de los componentes

### App.jsx

El componente `App` es el componente principal de la aplicación. Renderiza un encabezado con el título y subtitulo, y luego muestra el componente `FormularioPeliculas`.

### FormularioPeliculas.jsx

El componente `FormularioPeliculas` contiene un formulario con campos para ingresar el nombre, descripción y género de una película. Al enviar el formulario, se guarda la película en el localstorage y se muestra en una tarjeta.

### CardPelicula.jsx

El componente `CardPelicula` muestra una tarjeta con los detalles de una película. Recibe las propiedades `nombre`, `genero` y `descripcion` para mostrar los datos de la película.

