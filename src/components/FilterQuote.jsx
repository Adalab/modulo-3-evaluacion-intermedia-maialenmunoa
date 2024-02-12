import PropTypes from 'prop-types';

function FilterQuote({ handleFilter }) {

  const handleInputQuote = (event) => {
    handleFilter('quote', event.currentTarget.value);
  };

  return (
    <label htmlFor="character">
      Filtrar por frase
      <input 
      type="text" 
      name="quote" 
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