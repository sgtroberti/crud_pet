import { useLocation, useNavigate } from "react-router-dom";
import NewPetForm from "../components/NewPetForm/NewPetForm";
import { createPet } from "../services/pets";

const PetForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (event) => {
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
    await createPet(data);
    navigate(from, { replace: true });
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <NewPetForm />
      </form>
    </div>
  );
};

export default PetForm;
