import { useState, useEffect } from "react";

import Filters from "./Filters";
import Header from "./Header";
import QuotesList from "./QuotesList";
import FormAdd from "./FormAdd";

import dataFriends from "../data/friends.json";

import "../scss/App.scss";

function App() {

  const [quotesList, setQuotesList] = useState(dataFriends);
  const [filterQuote, setFilterQuote] = useState(''); 
  const [filterCharacter, setFilterCharacter] = useState('all');

  // Cargar las quotes guardadas del almacenamiento local al inicio
  useEffect(() => {
    const savedQuotes = JSON.parse(localStorage.getItem("quotes")) || dataFriends;
    setQuotesList(savedQuotes);
  }, []);

  // Guardar las quotes en el almacenamiento local cada vez que se actualice la lista
  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotesList));
  }, [quotesList]);

  const handleFilter = (filterName, value) => {
    if( filterName === 'quote' ) {
      setFilterQuote(value);
    }
    else if( filterName === 'character' ) {
      setFilterCharacter(value);
    }
  };

  // Agregar una nueva quote a la lista de quotes
  const handleAddQuote = (quote, character) => {
    const newQuote = {
      quote: quote,
      character: character
    };
    setQuotesList([...quotesList, newQuote]);
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

  const characterHasNoQuotes = filterCharacter !== 'all' &&
    !filteredQuotes.some(quote => quote.character === filterCharacter);

  return (
    <div className="page">
      <Header />
      <main>
        <Filters handleFilter={handleFilter} />
        {characterHasNoQuotes ? (
          <p className="page__text">El personaje seleccionado no tiene frases.</p>
        ) : (
          <QuotesList quotesList={filteredQuotes} />
        )}
        <FormAdd handleAddQuote={handleAddQuote}/>
      </main>
    </div>
  );
}

export default App;
