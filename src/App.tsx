import React, { useState, useEffect } from 'react';
import './assets/main.css'
import {getPokemon} from './modules/pokemon';


export default function App() {
  const [pokemonImage, setPokemonImage] = useState<string | null>(null);
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [pokemonTypes, setPokemonTypes] = useState<any[]>([]);

  useEffect(() => {
    const fetch = async () =>{
      let resObject = await getPokemon()
      setPokemonImage(resObject.sprites.front_default)
      setPokemonTypes(pokemonTypes => resObject.types)
    }

    fetch();
  }, []);

  return <div>
    <nav className="bg-[#82181A] border-red-200 dark:bg-[#287980]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="./src/assets/images/pokeBall.png" className="h-8" alt="8-bit Pokeball" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PokéDoku Trainer</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-red-100 rounded-lg bg-[#287980] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#82181A] dark:bg-red-800 md:dark:bg-[#287980] dark:border-red-700">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-red-700 rounded-sm md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="https://pokedoku.com/" className="block py-2 px-3 text-white bg-red-700 rounded-sm md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500" aria-current="page">PokéDoku</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="flex flex-row min-h-screen justify-center items-center">
      <div className='flex flex-col'>
        {pokemonImage ? <img className='h-32' src={pokemonImage}></img> : "Loading pokemon"}
        {}
        <div className='grid grid-cols-2'>
          <button onClick={() => console.log(pokemonTypes)}>1</button>
          <button onClick={() => console.log(pokemonTypes)}>2</button>
          <button onClick={() => console.log(pokemonTypes)}>3</button>
          <button onClick={() => console.log(pokemonTypes)}>4</button>
        </div>
      </div>
     </div>
  </div>
}
