function Filters() {

  return (
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
  );
}

export default Filters;