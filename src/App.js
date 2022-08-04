import imageRickMorty from './img/rick-morty.png'
import './App.css';

function App() {

  const reqApi = async () =>{
    // esta es async porque debe esperar la respuesta de la api
    //usaremos esta funcion para buscar los personajes
    const api =  await fetch('https://rickandmortyapi.com/api/character');
    // al usar async tambien debo usar el await
    const characterApi = await api.json();
    //Al hacer esto obtendremos informacion que podremos utilizar en nuestra pagina
    console.log(characterApi);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        <img src={imageRickMorty} alt="Rick & Morty" className="image-home"/>
        <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
      </header>
    </div>
  );
}

export default App;
