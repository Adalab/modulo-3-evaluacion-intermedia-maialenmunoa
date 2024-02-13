import "../scss/App.scss";

function FormAdd() {
    return (
      <form className="form-add">
        <h2>Añadir una nueva frase:</h2>
        <label htmlFor="quote">
          <span>Frase</span>
          <input
            type="text"
            name="quote"
            id="quote"
            className="form-add__input"
          />
        </label>
        <label htmlFor="character">
          <span>Personaje</span>
          <input
            type="text"
            name="character"
            id="character"
            className="form-add__input"
          />
        </label>
        <button className="form-add__button">Añadir una nueva frase</button>
      </form>
    );
  }
  
  export default FormAdd;