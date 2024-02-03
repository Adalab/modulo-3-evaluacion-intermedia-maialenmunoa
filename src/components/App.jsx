import '../scss/App.scss'
import Header from './Header';
import Filters from './Filters';
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
