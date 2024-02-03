import '../scss/App.scss';

import dataFriends from '../data/friends.json';

import Filters from './Filters';
import Header from './Header';
import QuotesList from './QuotesList';

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Filters />
        <QuotesList />
      </main>
  </div>
  )
}

export default App
