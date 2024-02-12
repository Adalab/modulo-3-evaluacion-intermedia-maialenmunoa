import PropTypes from 'prop-types';

function FilterQuote({ handleFilter }) {

  const handleInputQuote = (event) => {
    const value = event.currentTarget.value.toLowerCase(); // Convertir la frase del filtro a minúsculas
    handleFilter('quote', value);
  };

  return (
    <label>
      Filtrar por frase
      <input 
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