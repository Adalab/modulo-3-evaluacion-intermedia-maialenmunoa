import QuoteItem from "./QuoteItem";

function QuotesList() {

    return (
        <ul className="characters">
        <li>
          <QuoteItem name="Monica" />
        </li>
        <li>
          <QuoteItem name="Ross" />
          <p>Estamos en una pausa.</p>
        </li>
        <li>
          <QuoteItem name="Rachel" />
          <p>¡No estoy gorda! Estoy embarazada.</p>
        </li>
        <li>
          <QuoteItem name="Chandler" />
          <p>¡Pivotar!</p>
        </li>
        <li>
          <QuoteItem name="Joey" />
          <p>¿Cómo estás tú haciendo?</p>
        </li>
        <li>
          <QuoteItem name="Phoebe" />
          <p>¡Oh, Dios mío</p>
        </li>
      </ul>
    );
  }
  
  export default QuotesList;