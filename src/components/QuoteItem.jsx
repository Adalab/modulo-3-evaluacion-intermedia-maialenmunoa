import PropTypes from "prop-types";

function QuoteItem({name}) {

    return (
        <>
            <h2>{name}</h2>
            <p>¡Bienvenidos a la vida real! No es tan divertida como la televisión, pero a veces consigues un trabajo y te enamoras. Pero entonces, algo malo pasa. Como cuando te das cuenta de que todos tus calcetines tienen agujeros. ¿Dónde se van todos los calcetines?</p>
        </>
    );
}

QuoteItem.propTypes = {
    name: PropTypes.string.isRequired,
};  
  
export default QuoteItem;