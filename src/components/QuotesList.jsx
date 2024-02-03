import QuoteItem from "./QuoteItem";

function QuotesList() {

    return (
        <ul className="characters">
        <li>
          <QuoteItem />
        </li>
        <li>
          <h2>Ross</h2>
          <p>Estamos en una pausa.</p>
        </li>
        <li>
          <h2>Rachel</h2>
          <p>¡No estoy gorda! Estoy embarazada.</p>
        </li>
        <li>
          <h2>Chandler</h2>
          <p>¡Pivotar!</p>
        </li>
        <li>
          <h2>Joey</h2>
          <p>¿Cómo estás tú haciendo?</p>
        </li>
        <li>
          <h2>Phoebe</h2>
          <p>¡Oh, Dios mío</p>
        </li>
      </ul>
    );
  }
  
  export default QuotesList;