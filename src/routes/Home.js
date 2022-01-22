import { useEffect, useState } from "react";
import PetCard from "../components/PetCard/PetCard";
import { listPets } from "../services/pets";

const Home = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const request = async () => {
      const { data, error } = await listPets();
      data?.pets ? setPets(data.pets) : alert(error);
    };
    request();
  }, []);

  return (
    <div className="pet-cardlist">
      {pets.map(({ id, name, breed, age, species, gender, url }) => {
        return (
          <PetCard
            key={id}
            id={id}
            name={name}
            breed={breed}
            age={age}
            species={species}
            gender={gender}
            url={url}
          />
        );
      })}
    </div>
  );
};

export default Home;
