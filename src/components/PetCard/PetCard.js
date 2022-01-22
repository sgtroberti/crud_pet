import "./PetCard.css";

const PetCard = ({ id, name, breed, age, species, gender, url }) => {
  return (
    <div key={id} className="pet-card">
      <div className="pet-card-info">
        <p>
          <strong>Nome: </strong>
          {name}
        </p>
        <p>
          <strong>Raça: </strong>
          {breed}
        </p>
        <p>
          <strong>Idade: </strong>
          {age}
        </p>
        <p>
          <strong>Espécie: </strong>
          {species}
        </p>
        <p>
          <strong>Gênero: </strong>
          {gender}
        </p>
      </div>

      <img className="pet-card-photo" src={url} alt="PetPhoto" />
    </div>
  );
};

export default PetCard;
