import React, { useState } from "react";
import Characters from "../containers/Characters";
import CharacterCard from "./CharacterCard";

const CharactersPage = () => {
  const { data, error, loading } = Characters(2);

  // handleChange for every word/ keystroke entered
  const [search, setSearch] = useState("");

  // Handle change for every key stroke
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // Error and Loading Screens
  if (error) return <p>...Error...</p>;
  if (loading) return <h1 className="title">. . . Loading . . .</h1>;

  // Search Function
  let filteredCharacters;
  filteredCharacters = data?.characters?.results?.filter((character) => character.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="searchInput">
        <label htmlFor="">Search: </label>
        <input className="searchInputField" type="text" name="search" value={search} onChange={handleChange} />
      </div>
      <div className="filmFlexContainer">
        {filteredCharacters?.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
        {filteredCharacters?.length === 0 && <h1 className="title primary">No character matches these search...</h1>}
      </div>
    </div>
  );
};

export default CharactersPage;
