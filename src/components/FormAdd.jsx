import "../scss/App.scss";

import { useState } from "react";
import PropTypes from "prop-types";

/**
 * Componente que representa el formulario para añadir una nueva frase.
 * 
 * @param {function} handleAddQuote - Función de callback para añadir una nueva frase.
 */
function FormAdd({ handleAddQuote }) {
  // Definir estados locales para la frase y el personaje
  const [quote, setQuote] = useState('');
  const [character, setCharacter] = useState('');

  // Función para manejar los cambios en los campos de texto de la frase y del personaje
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'quote') {
      setQuote(value);
    } else if (name === 'character') {
      setCharacter(value);
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Verificar que tanto la frase como el personaje no estén vacíos
    if (quote.trim() && character.trim()) {
      // Llamar a la función de callback para añadir la nueva frase
      handleAddQuote(quote, character);
      // Limpiar los campos de texto después de añadir la frase
      setQuote('');
      setCharacter('');
    }
  };
  
    // Renderizar el formulario de añadir frase con los campos de texto y el botón de enviar
    return (
      <form className="form-add" onSubmit={handleSubmit}>
        <h2 className="form-add__h2">Añadir una nueva frase:</h2>
        <label className="form-add__label" htmlFor="quote">
          <span className="form-add__span">Frase</span>
          <input
            type="text"
            name="quote"
            id="quote"
            className="form-add__input"
            value={quote}
            onChange={handleInputChange}
          />
        </label>
        <label className="form-add__label" htmlFor="character">
          <span className="form-add__span">Personaje</span>
          <input
            type="text"
            name="character"
            id="character"
            className="form-add__input"
            value={character}
            onChange={handleInputChange}
          />
        </label>
        <button className="form-add__button" type="submit">AÑADIR</button>
      </form>
    );
  }

  FormAdd.propTypes = {
    handleAddQuote: PropTypes.func.isRequired
  };
  
  export default FormAdd;