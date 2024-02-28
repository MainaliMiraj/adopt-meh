import useBreedList from "./src/useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const Form = ({ setLocation, animal, setAnimal, setBreed,breed,requestPets,location }) => {
  const [breeds] = useBreedList(animal);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        requestPets();
      }}
    >
      <label htmlFor="location">
        Location
        <input
          id="location"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>

      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
          onBlur={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
        >
          <option />
          {ANIMALS.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="breed">
        Breed
        <select
          disabled={!breeds.length}
          id="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          onBlur={(e) => setBreed(e.target.value)}
        >
          <option />
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default Form;