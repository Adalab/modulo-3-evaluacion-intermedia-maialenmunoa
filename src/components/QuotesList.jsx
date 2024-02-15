import PropTypes from 'prop-types';
import QuoteItem from "./QuoteItem";

/**
 * Componente que representa una lista de frases.
 * 
 * @param {Array} quotesList - Lista de objetos que contienen información sobre las frases.
 */
function QuotesList({ quotesList }) {
  // Mapear la lista de frases para renderizar cada elemento de la lista
  const htmlQuotes = quotesList.map( (quote, idx) => (
    <li key={idx}>
      <QuoteItem 
        name={quote.character}
        phrase={quote.quote}
      />
    </li>
  ));
  // Renderizar la lista de frases
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