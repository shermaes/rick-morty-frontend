import imageRickMorty from './img/rick-morty.png'
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters]=useState(null);
  // 1)los props es el canal por donde los componentes se van a comunicar, que vamos a pasar como props? 
  //los characters

  const reqApi = async () =>{
    const api =  await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results)
  };
  
  //2)al componente Characters le vamos a pasar los characters como parametro, el paso 3 se encuentra en el archivo Characters.js
  
  //paso 4) Reorganizamos el return, tenemos unas llaves con el siguiente if:
  // si characters existe nos va a mostrar el componente <Characters/> y si no nos mostrara la imagen y el boton del home
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
        <Characters characters={characters} setCharacters={setCharacters}/>  
        ) : (
          <>
           <img src={imageRickMorty} alt="Rick & Morty" className="image-home"/>
        <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
          </>
        )}
        
        
      </header>
    </div>
  );
}

export default App;
