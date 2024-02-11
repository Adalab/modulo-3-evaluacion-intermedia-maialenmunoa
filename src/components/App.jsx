import { useState } from "react";

import Filters from "./Filters";
import Header from "./Header";
import QuotesList from "./QuotesList";

import "../scss/App.scss";

import dataFriends from "../data/friends.json";

function App() {
  const [friends] = useState(dataFriends);

  const [filterQuote, setFilterQuote] = useState(''); 

  const handleFilterQuote = (filterValue) => {
    setFilterQuote(filterValue);
  };

  const filteredFriends = friends.filter( friend => friend.quote.toLowerCase().includes(filterQuote.toLowerCase()) );

  return (
    <div className="page">
      <Header />
      <main>
        <Filters handleFilterQuote={handleFilterQuote} />
        <QuotesList friends={filteredFriends} />
      </main>
    </div>
  );
}

export default App;
