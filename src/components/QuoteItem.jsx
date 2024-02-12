import PropTypes from "prop-types";

function QuoteItem({name, phrase}) {

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