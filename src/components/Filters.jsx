function Filters( {handleFilterQuote, handleFilterCharacter} ) {

  const handleInput = (event) => {
    handleFilterQuote(event.currentTarget.value);
  };

  const handleSelect = (event) => {
    handleFilterCharacter(event.currentTarget.value);
  };

  return (
    <form>
      <label htmlFor="search">Filtrar por frase:</label>
        <input type="text" id="search" placeholder="Buscar..." onInput={handleInput} />
      <label htmlFor="character">Filtrar por personaje:</label>  
        <select id="character" onInput={handleSelect}>
          <option value="all">Todos</option>
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