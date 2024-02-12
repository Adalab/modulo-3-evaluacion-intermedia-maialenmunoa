function FormAdd() {
    return (
      <form>
        <h2>Añadir una nueva frase</h2>
        <label htmlFor="quote">
          <span>Frase</span>
          <input
            type="text"
            name="quote"
            id="quote"
          />
        </label>
        <label htmlFor="character">
          <span>Personaje</span>
          <input
            type="text"
            name="character"
            id="character"
          />
        </label>
        <button>Añadir un nueva frase</button>
      </form>
    );
  }
  
  export default FormAdd;