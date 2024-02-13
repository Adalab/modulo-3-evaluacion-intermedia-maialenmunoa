import "../scss/App.scss";

import { useState } from "react";
import PropTypes from "prop-types";

function FormAdd({ handleAddQuote }) {

  const [quote, setQuote] = useState('');
  const [character, setCharacter] = useState('');

   // Manejar cambios en el campo de texto de la frase
   const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'quote') {
      setQuote(value);
    } else if (name === 'character') {
      setCharacter(value);
    }
  };

  // Manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    if (quote.trim() && character.trim()) {
      handleAddQuote(quote, character);
      setQuote('');
      setCharacter('');
    }
  };

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
        <button className="form-add__button" type="submit">Añadir una nueva frase</button>
      </form>
    );
  }

  FormAdd.propTypes = {
    handleAddQuote: PropTypes.func.isRequired
  };
  
  export default FormAdd;