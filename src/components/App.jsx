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

  // Filtrar Friends basado en la frase y el personaje seleccionado
  const filteredFriends = friends.filter( friend => {
    // Comprueba si la frase incluye el texto de filtro
    let quoteMatches = friend.quote.toLowerCase().includes(filterQuote.toLowerCase());
  
    // Comprueba si el personaje de Friends coincide con el filtro de personaje
    let characterMatches = false;
    if (filterCharacter === 'todos') {
      // Si el filtro de personaje es 'todos', entonces todos los Friends coinciden
      characterMatches = true;
    } else if (friend.character.toLowerCase() === filterCharacter) {
      // Si el personaje coincide con el filtro de personaje, entonces hay una coincidencia
      characterMatches = true;
    }
  
    // Si tanto la frase como el personaje coinciden, entonces pasa el filtro
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
