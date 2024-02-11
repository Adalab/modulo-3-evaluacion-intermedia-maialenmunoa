import PropTypes from "prop-types";

function Filters( {handleFilterQuote, handleFilterCharacter, filterQuote, filterCharacter} ) {

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
        <input type="text" id="search" placeholder="Buscar..." value={filterQuote} onInput={handleInput} />
      <label htmlFor="character">Filtrar por personaje:</label>  
        <select id="character" value={filterCharacter} onChange={handleSelect}>
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
  filterCharacter: PropTypes.string.isRequired,
  filterQuote: PropTypes.string.isRequired,
};

export default Filters;