import { useState } from "react";

import Filters from "./Filters";
import Header from "./Header";
import QuotesList from "./QuotesList";

import "../scss/App.scss";

import dataFriends from "../data/friends.json";

function App() {
  const [friends] = useState(dataFriends);

  const [filterQuote, setFilterQuote] = useState(''); 
  const [filterCharacter, setFilterCharacter] = useState('todos');

  const handleFilterQuote = (filterValue) => {
    setFilterQuote(filterValue);
  };

  const handleFilterCharacter = (character) => {
    setFilterCharacter(character);
  };

  const filteredFriends = friends.filter( friend => {
    // Comprueba si la frase del amigo incluye el texto de filtro
    let quoteMatches = friend.quote.toLowerCase().includes(filterQuote.toLowerCase());
  
    // Comprueba si el personaje del amigo coincide con el filtro de personaje
    let characterMatches = false;
    if (filterCharacter === 'todos') {
      // Si el filtro de personaje es 'todos', entonces todos los amigos coinciden
      characterMatches = true;
    } else if (friend.character.toLowerCase() === filterCharacter) {
      // Si el personaje del amigo coincide con el filtro de personaje, entonces hay una coincidencia
      characterMatches = true;
    }
  
    // Si tanto la frase como el personaje coinciden, entonces el amigo pasa el filtro
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

export default App;
