import PropTypes from 'prop-types';

/**
 * Componente que representa un filtro para seleccionar un personaje.
 * 
 * @param {function} handleFilter - Función de callback para manejar el filtro seleccionado.
 */
function FilterCharacter({ handleFilter }) {
  /**
     * Función para manejar el evento de cambio en la selección de personaje.
     * Llama a la función de callback handleFilter con el nombre del filtro y el valor seleccionado.
     * 
     * @param {object} event - Objeto de evento del cambio en la selección.
     */
  const handleInputCharacter = (event) => {
    handleFilter('character', event.currentTarget.value);
  };

  // Renderizar el componente de selección de personaje
  return (
      <select className="filter__select" onInput={handleInputCharacter}>
        <option value="all">Todos los personajes</option>
        <option value="Ross">Ross</option>
        <option value="Monica">Monica</option>
        <option value="Joey">Joey</option>
        <option value="Phoebe">Phoebe</option>
        <option value="Chandler">Chandler</option>
        <option value="Rachel">Rachel</option>
      </select>
  );
}

FilterCharacter.propTypes = {
  handleFilter: PropTypes.func.isRequired
};

export default FilterCharacter;