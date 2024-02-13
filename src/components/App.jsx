import { useState } from "react";

import Filters from "./Filters";
import Header from "./Header";
import QuotesList from "./QuotesList";
import FormAdd from "./FormAdd";

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

  const filteredQuotes = quotesList.filter(quote => {
    const quoteLowerCase = quote.quote.toLowerCase(); // Convertir la quote a minúsculas
    const filterLowerCase = filterQuote.toLowerCase(); // Convertir la frase del filtro a minúsculas
    const quoteMatches = quoteLowerCase.includes(filterLowerCase);
    
    if (filterCharacter === 'all') {
      return quoteMatches;
    } else {
      return quoteMatches && quote.character === filterCharacter;
    }
  });

  return (
    <div className="page">
      <Header />
      <main>
        <Filters handleFilter={handleFilter} />
        <QuotesList quotesList={filteredQuotes} />
        <FormAdd />
      </main>
    </div>
  );
}

export default App;
