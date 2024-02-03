import PropTypes from "prop-types";

function QuoteItem({name, phrase}) {

    return (
        <>
            <h2>{name}</h2>
            <p>{phrase}</p>
        </>
    );
}

QuoteItem.propTypes = {
    name: PropTypes.string.isRequired,
    phrase: PropTypes.string.isRequired,
};  
  
export default QuoteItem;