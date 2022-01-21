import client from "../providers/client";

const API_CODE = process.env.REACT_APP_API_CODE;

export const listPets = () => client(`pets/${API_CODE}`);

export const createPet = ({ name, breed, age, species, gender, tutor, url }) =>
  client
    .post(`pets/${API_CODE}`, {
      name,
      breed,
      age,
      species,
      gender,
      tutor,
      url,
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
