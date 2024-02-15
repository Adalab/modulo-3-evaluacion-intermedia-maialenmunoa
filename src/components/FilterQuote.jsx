import PropTypes from 'prop-types';

/**
 * Componente que representa un filtro para buscar una frase.
 * 
 * @param {function} handleFilter - Función de callback para manejar el filtro de la frase.
 */
function FilterQuote({ handleFilter }) {
  /**
     * Función para manejar el evento de entrada de texto en el filtro de la frase.
     * Llama a la función de callback handleFilter con el nombre del filtro y el valor de la frase.
     * 
     * @param {object} event - Objeto de evento del cambio en el filtro de la frase.
     */
  const handleInputQuote = (event) => {
    const value = event.currentTarget.value.toLowerCase(); // Convertir la frase del filtro a minúsculas
    handleFilter('quote', value);
  };

  // Renderizar el componente de filtro de frase
  return (
    <label className="filter__quote">
      <input 
        className="filter__quote-input"
        placeholder="Buscar frase..."
        type="text" 
        id="quote" 
        onInput={handleInputQuote} 
      />
    </label>
  );
}

FilterQuote.propTypes = {
  handleFilter: PropTypes.func.isRequired
};

export default FilterQuote;