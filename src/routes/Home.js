import { useEffect, useState } from "react";
import { listPets } from "../services/pets";

const Home = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const request = async () => {
      const { data } = await listPets();
      setPets(data.pets);
    };
    request();
  }, []);

  console.log(pets);
  return (
    <div className="">
      {pets.map(({ id, name, breed, age, species, gender, url }) => {
        return (
          <div key={id} className="pet">
            <p>Nome: {name}</p>
            <p>Raça: {breed}</p>
            <p>Idade: {age}</p>
            <p>Espécie: {species}</p>
            <p>Gênero: {gender}</p>
            <img src={url} alt="PetPhoto" />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
