import { useState } from 'react';

import Filters from './Filters';
import Header from './Header';
import QuotesList from './QuotesList';

import '../scss/App.scss';

import dataFriends from '../data/friends.json';

function App() {
  const [quotes, setQuotes] = useState(dataFriends);

  return (
    <div className="page">
      <Header />
      <main>
        <Filters />
        <QuotesList quotes={quotes} />
      </main>
  </div>
  )
}

export default App
