import PropTypes from "prop-types";

/**
 * Componente que representa un elemento de la lista de frases.
 * 
 * @param {string} name - Nombre del personaje.
 * @param {string} phrase - Frase del personaje.
 */
function QuoteItem({name, phrase}) {
    // Renderizar el elemento de la lista con el nombre del personaje y su frase
    return (
        <li className="list__item">
                <h2 className="list__item-name">{name}</h2>
                <p className="list__item-quote">{phrase}</p>
        </li>
    );
}

QuoteItem.propTypes = {
    name: PropTypes.string.isRequired,
    phrase: PropTypes.string.isRequired,
};  
  
export default QuoteItem;