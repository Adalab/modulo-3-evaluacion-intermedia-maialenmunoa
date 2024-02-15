import PropTypes from 'prop-types';

import FilterCharacter from "./FilterCharacter";
import FilterQuote from "./FilterQuote";

/**
 * Componente que representa el formulario de filtros para buscar frases y personajes.
 * 
 * @param {function} handleFilter - Función de callback para manejar los filtros.
 */
function Filters( {handleFilter} ) {
  // Renderizar el formulario de filtros con los componentes FilterQuote y FilterCharacter
  return (
    <form className="form">
      <FilterQuote handleFilter={handleFilter} />
      <FilterCharacter handleFilter={handleFilter} />
    </form>
  );
}

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired
};

export default Filters;