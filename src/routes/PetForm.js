import { createPet } from "../services/pets";

const PetForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const breed = formData.get("breed");
    const age = formData.get("age");
    const species = formData.get("species");
    const gender = formData.get("gender");
    const url = formData.get("url");
    const data = {
      name,
      breed,
      age,
      species,
      gender,
      url,
    };
    createPet(data);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
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
        <label htmlFor="gender">
          Gênero:
          <input type="radio" id="macho" name="gender" value="macho" />
          <label htmlFor="macho">macho</label>
          <input type="radio" id="femea" name="gender" value="femea" />
          <label htmlFor="femea">fêmea</label>
        </label>
        <label htmlFor="url">
          Url foto: <input type="text" name="url" id="url" />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PetForm;
