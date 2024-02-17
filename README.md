# Buscador de frases de Friends

Este proyecto consiste en una aplicación web donde las usuarias pueden buscar y visualizar frases famosas de sus personajes favoritos de la serie 'Friends'. La aplicación utiliza tecnologías web como React, JavaScript, HTML y CSS.

## Funcionalidades destacadas

- Búsqueda de frases: Las usuarias pueden buscar frases de la serie 'Friends' utilizando un formulario de búsqueda.
- Filtrado por personaje: La aplicación permite filtrar las frases por personaje.
- Añadir nuevas frases: Las usuarias pueden agregar nuevas frases a la lista.

## Tecnologías utilizadas

- React: Para la creación de componentes reutilizables y la gestión del estado de la aplicación.
- JavaScript: Para la lógica de la aplicación y la manipulación del DOM.
- HTML & CSS: Para la estructura y el diseño de la interfaz de usuario.
- Sass: Para la mejora de estilos con el preprocesador Sass.
- Flexbox: Para la maquetación y disposición de elementos en la interfaz.

## Uso de LocalStorage para el almacenamiento de datos

La aplicación utiliza localStorage para almacenar las frases agregadas por las usuarias. Después de agregar una nueva frase, se actualiza el localStorage para reflejar los cambios y mantenerlos entre sesiones.

## Ejemplo de Código

A continuación, se muestra un ejemplo de cómo se agrega una nueva frase a la lista utilizando el useState hook de React:

```javascript
const [quotesList, setQuotesList] = useState(dataFriends);

const handleAddQuote = (quote, character) => {
    const newQuote = {
      quote: quote,
      character: character
    };
    setQuotesList([...quotesList, newQuote]);
};
```

## Guía de inicio rápido 🔍

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

> **NOTA:** Asegúrate de tener instalado [Node JS](https://nodejs.org/)

### Pasos para ejecutar el ejercicio ▶️

Ejecuta estos comandos en la terminal

1. **Clona el repositorio**:

```bash
 git clone https://github.com/Adalab/modulo-3-evaluacion-intermedia-maialenmunoa.git
```

2. Instala las **dependencias locales**:

```bash
npm install
```

3. **Arranca el proyecto**:

```bash
npm run dev
```

Este comando:
**Abre automáticamente una ventana en el navegador y muestra la página web**

## Autoría 👩‍💻

[Maialen Muñoa](https://github.com/maialenmunoa)
