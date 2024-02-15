import { useState, useEffect } from "react";

// Importar componentes necesarios
import Header from "./Header";
import Filters from "./Filters";
import QuotesList from "./QuotesList";
import FormAdd from "./FormAdd";
import Footer from "./Footer";

// Importar datos de frases predefinidas
import dataFriends from "../data/friends.json";

// Importar estilos
import "../scss/App.scss";

/**
 * Componente principal que representa la app de frases de 'Friends'.
 * Maneja la lógica principal de la app, incluida la gestión de filtros, 
 * la adición de nuevas frases y la carga/guardado de datos en LocalStorage.
 */
function App() {
  // Estado para almacenar la lista de frases
  const [quotesList, setQuotesList] = useState(dataFriends);
  // Estado para el filtro de frase
  const [filterQuote, setFilterQuote] = useState(''); 
  // Estado para el filtro de personaje
  const [filterCharacter, setFilterCharacter] = useState('all');

  // Cargar las frases guardadas del LocalStorage al iniciar la app
  useEffect(() => {
    // Obtener las frases guardadas del LocalStorage, o usar las frases predefinidas si no hay nada guardado
    const savedQuotes = JSON.parse(localStorage.getItem("quotes")) || dataFriends;
    // Establecer las frases en el estado
    setQuotesList(savedQuotes);
  }, []);

  // Guardar las frases en LocalStorage cada vez que se actualice la lista
  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotesList));
  }, [quotesList]);

  // Función para manejar los filtros de búsqueda
  const handleFilter = (filterName, value) => {
    if( filterName === 'quote' ) {
      setFilterQuote(value);
    }
    else if( filterName === 'character' ) {
      setFilterCharacter(value);
    }
  };

  // Función para agregar una nueva frase a la lista de frases
  const handleAddQuote = (quote, character) => {
    const newQuote = {
      quote: quote,
      character: character
    };
    // Actualizar la lista de frases con la nueva frase agregada
    setQuotesList([...quotesList, newQuote]);
  };

  // Filtrar las frases según los filtros seleccionados
  const filteredQuotes = quotesList.filter(quote => {
  const quoteLowerCase = quote.quote.toLowerCase(); // Convertir la frase a minúsculas
  const filterLowerCase = filterQuote.toLowerCase(); // Convertir la frase del filtro a minúsculas
  const quoteMatches = quoteLowerCase.includes(filterLowerCase);
    
    if (filterCharacter === 'all') {
      return quoteMatches;
    } else {
      return quoteMatches && quote.character === filterCharacter;
    }
  });

  // Verificar si el personaje seleccionado no tiene frases
  const characterHasNoQuotes = filterCharacter !== 'all' &&
    !filteredQuotes.some(quote => quote.character === filterCharacter);
 
  // RENDERIZAR LA APP
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
      <Footer />
    </div>
  );
}

export default App;
