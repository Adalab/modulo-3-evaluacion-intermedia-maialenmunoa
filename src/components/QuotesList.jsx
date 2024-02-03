import QuoteItem from "./QuoteItem";

function QuotesList() {

    return (
        <ul className="characters">
        <li>
          <QuoteItem name="Ross" phrase="Pivot! Pivot! Pivot! Pivot! Pivot!"/>
        </li>
        <li>
          <QuoteItem name="Joey" phrase="Joey doesn't share food!"/>
        </li>
        <li>
          <QuoteItem name="Phoebe" phrase="But they don't know that we know they know we know!"/>
        </li>
        <li>
          <QuoteItem name="Phoebe" phrase="That's P, as in Phoebe, H as in hoebe, O as in oebe, E as in ebe, B as in bebe, and E as in 'Ello there mate."/>
        </li>
        <li>
          <QuoteItem name="Chandler" phrase="That's P, as in Phoebe, H as in hoebe, O as in oebe, E as in ebe, B as in bebe, and E as in 'Ello there mate."/>
        </li>
        <li>
          <QuoteItem name="Rachel" phrase=	"I got off the plane."/>
        </li>
      </ul>
    );
  }
  
  export default QuotesList;