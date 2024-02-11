import { useState } from "react";
import PropTypes from "prop-types";

import Filters from "./Filters";
import Header from "./Header";
import QuotesList from "./QuotesList";

import "../scss/App.scss";

import dataFriends from "../data/friends.json";

function App() {

  // Variable de estado para almacenar la lista de Friends
  const [friends] = useState(dataFriends);

  // Variable de estado para el filtro de frase
  const [filterQuote, setFilterQuote] = useState(''); 
  // Variable de estado para el filtro de personaje
  const [filterCharacter, setFilterCharacter] = useState('todos');

  // Función para manejar el cambio en el filtro de frase
  const handleFilterQuote = (filterValue) => {
    setFilterQuote(filterValue);
  };

  // Función para manejar el cambio en el filtro de personaje
  const handleFilterCharacter = (character) => {
    setFilterCharacter(character);
  };

 // Calcular las frases filtradas en base al array de todas las frases y los valores de los filtros
  const filteredFriends = friends.filter(friend => {
  const quoteMatches = !filterQuote || friend.quote.toLowerCase().includes(filterQuote.toLowerCase());
  const characterMatches = filterCharacter === 'todos' || friend.character.toLowerCase() === filterCharacter;
  return quoteMatches && characterMatches;
});

  return (
    <div className="page">
      <Header />
      <main>
        <Filters handleFilterQuote={handleFilterQuote} handleFilterCharacter={handleFilterCharacter} />
        <QuotesList friends={filteredFriends} />
      </main>
    </div>
  );
}

App.propTypes = {
  handleFilterQuote: PropTypes.func.isRequired,
  handleFilterCharacter: PropTypes.func.isRequired,
};

export default App;
