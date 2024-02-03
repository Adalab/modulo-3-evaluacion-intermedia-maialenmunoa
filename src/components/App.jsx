import '../scss/App.scss'
import Filters from './Filters';
import QuotesList from './QuotesList';

function App() {
  return (
    <div className="page">
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <main>
        <Form />
        <QuotesList />
      </main>
  </div>
  )
}

export default App
