import PropTypes from 'prop-types';

import QuoteItem from "./QuoteItem";

function QuotesList({ friends }) {

  const htmlQuotes = friends.map((friend, idx) => (
    <li key={idx}>
      <QuoteItem 
        name={friend.character}
        phrase={friend.quote}
      />
    </li>
  ));

  return (
    <ul className="characters">
      {htmlQuotes}
    </ul>
  );
}

QuotesList.propTypes = {
  friends: PropTypes.array
}
  
export default QuotesList;