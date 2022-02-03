import React from "react";
import Characters from "../containers/Characters";

const CharactersPage = () => {
  const { data, error, loading } = Characters(1);

  if (error) return <p>...Error...</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h3>
        {data?.characters?.results.map((character) => (
          <>
            <p className="boldBig" key={character.id}>
              {character.name}
            </p>
          </>
        ))}
      </h3>
    </div>
  );
};

export default CharactersPage;
