import "./NewPetForm.css";

const NewPetForm = () => {
  return (
    <div className="new-pet-form">
      <label htmlFor="name">
        Nome: <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="breed">
        Raça: <input type="text" name="breed" id="breed" />
      </label>
      <label htmlFor="age">
        Idade: <input type="number" name="age" id="age" />
      </label>
      <label htmlFor="species">
        Espécie:
        <select name="species" id="species">
          <option value="cachorro">Cachorro</option>
          <option value="gato">Gato</option>
        </select>
      </label>
      <label className="gender" htmlFor="gender">
        Gênero:
        <input type="radio" id="macho" name="gender" value="macho" />
        <label htmlFor="macho">macho</label>
        <input type="radio" id="femea" name="gender" value="femea" />
        <label htmlFor="femea">fêmea</label>
      </label>
      <label htmlFor="url">
        Url foto: <input type="text" name="url" id="url" />
      </label>
      <button className="button__green button" type="submit">
        Enviar
      </button>
    </div>
  );
};

export default NewPetForm;
