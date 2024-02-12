import PropTypes from 'prop-types';

import QuoteItem from "./QuoteItem";

function QuotesList({ quotesList }) {

  const htmlQuotes = quotesList.map( (quote, idx) => (
    <li key={idx}>
      <QuoteItem 
        name={quote.character}
        phrase={quote.quote}
      />
    </li>
  ));

  return (
    <ul className="list">
      {htmlQuotes}
    </ul>
  );
}

QuotesList.propTypes = {
  quotesList: PropTypes.array
}
  
export default QuotesList;