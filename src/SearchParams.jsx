import { useEffect, useState } from "react";
import Form from "../Form";

import Result from "./Result";

const SearchParams = () => {
  const [pets, setPets] = useState([]);
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(`
      http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}
    `);
    const json = await res.json();
    setPets(json.pets);
  }
  return (
    <div className="search-params">
      <Form
        animal={animal}
        setAnimal={setAnimal}
        setBreed={setBreed}
        setLocation={setLocation}
        breed={breed}
        requestPets={requestPets}
        location={location}
      />

      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;
