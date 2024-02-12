import { useState } from "react";

import Filters from "./Filters";
import Header from "./Header";
import QuotesList from "./QuotesList";

import dataFriends from "../data/friends.json";

import "../scss/App.scss";

function App() {

  const [quotesList] = useState(dataFriends);
  const [filterQuote, setFilterQuote] = useState(''); 
  const [filterCharacter, setFilterCharacter] = useState('all');

  const handleFilter = (filterName, value) => {
    if( filterName === 'quote' ) {
      setFilterQuote(value);
    }
    else if( filterName === 'character' ) {
      setFilterCharacter(value);
    }
  };

  const filteredQuotes =
    quotesList
      .filter( quote => quote.quote.includes(filterQuote) )
      .filter( quote => {
          if( filterCharacter === 'all' ) {
            return true;
          }
          else {
            return quote.character===filterCharacter;
          }
        });

  return (
    <div className="page">
      <Header />
      <main>
        <Filters handleFilter={handleFilter} />
        <QuotesList quotesList={filteredQuotes} />
      </main>
    </div>
  );
}

export default App;
