async function getPokemon(){
    console.log("displayTest");

    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
        console.error("Error fetching Pokémon:", error);
        return null;
    }
}

export{ getPokemon }