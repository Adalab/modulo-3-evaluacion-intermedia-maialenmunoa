import PropTypes from 'prop-types';

import FilterCharacter from "./FilterCharacter";
import FilterQuote from "./FilterQuote";

function Filters( {handleFilter} ) {

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