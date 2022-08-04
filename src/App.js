import imageRickMorty from './img/rick-morty.png'
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  //paso 3) usaremos un useState para crea un nuevo estado para renderizar todos los datos
  const [characters, setCharacters]=useState(null);

  //Paso 2 realizar el request de todos los caracteres para obtener los datos necesarios
  const reqApi = async () =>{
    // esta es async porque debe esperar la respuesta de la api
    //usaremos esta funcion para buscar los personajes
    const api =  await fetch('https://rickandmortyapi.com/api/character');
    // al usar async tambien debo usar el await
    const characterApi = await api.json();
    //Al hacer esto obtendremos informacion que podremos utilizar en nuestra pagina
    setCharacters(characterApi.results)
    //el .results viene de la misma estructura que pedi en el request
  };
  //Paso 1) Pintar el home
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        <Characters characters={characters}/>
        <img src={imageRickMorty} alt="Rick & Morty" className="image-home"/>
        <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
      </header>
    </div>
  );
}

export default App;
