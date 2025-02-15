async function displayTest(){
    console.log("displayTest");

    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      const result = await response.json();
      return result.sprites.front_default;
    } catch (error) {
        console.error("Error fetching Pokémon:", error);
        return null;
    }
}

export{ displayTest }