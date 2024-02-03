import '../scss/App.scss'

function App() {
  return (
    <div className="page">
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <main>
        <form>
          <label htmlFor="search">Filtrar por frase:</label>
            <input type="text" id="search" placeholder="Buscar..." />
          <label htmlFor="character">Filtrar por personaje:</label>  
            <select>
              <option value="todos">Todos</option>
              <option value="monica">Mónica</option>
              <option value="ross">Ross</option>
              <option value="rachel">Rachel</option>
              <option value="chandler">Chandler</option>
              <option value="joey">Joey</option>
              <option value="phoebe">Phoebe</option>
            </select>
        </form>
        <ul>
          <li>
            <h2>Monica</h2>
            <p>¡Bienvenidos a la vida real! No es tan divertida como la televisión, pero a veces consigues un trabajo y te enamoras. Pero entonces, algo malo pasa. Como cuando te das cuenta de que todos tus calcetines tienen agujeros. ¿Dónde se van todos los calcetines?</p>
          </li>
          <li>
            <h2>Ross</h2>
            <p>Estamos en una pausa.</p>
          </li>
          <li>
            <h2>Rachel</h2>
            <p>¡No estoy gorda! Estoy embarazada.</p>
          </li>
          <li>
            <h2>Chandler</h2>
            <p>¡Pivotar!</p>
          </li>
          <li>
            <h2>Joey</h2>
            <p>¿Cómo estás tú haciendo?</p>
          </li>
          <li>
            <h2>Phoebe</h2>
            <p>¡Oh, Dios mío</p>
          </li>
        </ul>
      </main>
  </div>
  )
}

export default App
