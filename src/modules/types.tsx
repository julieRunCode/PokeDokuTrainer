async function getTypes(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/type/");
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching Pokémon types:", error);
        return null;
    }
}

export{ getTypes }