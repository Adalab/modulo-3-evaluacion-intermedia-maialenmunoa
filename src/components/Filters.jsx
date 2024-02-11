import React from "react";
import PropTypes from "prop-types";

function Filters( {handleFilterQuote, handleFilterCharacter} ) {

  // Manejar cambios en el campo de texto de frase 
  const handleInput = (event) => {
    handleFilterQuote(event.currentTarget.value);
  };

  // Manejar cambios en el campo de selección de personaje
  const handleSelect = (event) => {
    handleFilterCharacter(event.currentTarget.value);
  };

  return (
    <form>
      <label htmlFor="search">Filtrar por frase:</label>
        <input type="text" id="search" placeholder="Buscar..." onInput={handleInput} />
      <label htmlFor="character">Filtrar por personaje:</label>  
        <select id="character" onInput={handleSelect}>
          <option value="all">Todos</option>
          <option value="monica">Mónica</option>
          <option value="ross">Ross</option>
          <option value="rachel">Rachel</option>
          <option value="chandler">Chandler</option>
          <option value="joey">Joey</option>
          <option value="phoebe">Phoebe</option>
        </select>
    </form>
  );
}

Filters.propTypes = {
  handleFilterQuote: PropTypes.func.isRequired,
  handleFilterCharacter: PropTypes.func.isRequired,
};

export default Filters;