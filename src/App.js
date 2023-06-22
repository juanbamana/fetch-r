import imageRickMorty from './img/rick-morty.png'
import { useState } from 'react';
import './App.css';
import { Characters } from './components/Characters';


function App() {

  const [characters, setCharacters] = useState(null)

  const reqApi = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const { results } = await response.json()
    setCharacters(results)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>


        {characters ? (<Characters characters={characters} setCharacters={setCharacters} />) : (
          <>
            <img src={imageRickMorty} alt='Rick & Morty' className='img-home' />
            <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
          </>

        )}


      </header>
    </div>
  );
}

export default App;
