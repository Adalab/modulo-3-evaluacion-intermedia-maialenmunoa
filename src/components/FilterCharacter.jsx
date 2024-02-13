import PropTypes from 'prop-types';

function FilterCharacter({ handleFilter }) {

  const handleInputCharacter = (event) => {
    handleFilter('character', event.currentTarget.value);
  };

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