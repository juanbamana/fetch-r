import React from 'react'

export const Characters = ({ characters, setCharacters }) => {


   const resetCharacters = () => {
    setCharacters(null)
   }


    return (
        <div className='characters'>

            <h1>Personajes</h1>

            <span onClick={resetCharacters} className='back-home'>Volver a la Home</span>
            <div className='container-characters'>

                {characters.map((characters) => (
                    <div key={characters.id} className='character-container'>
                        <div>

                            <img src={characters.image} alt={characters.name} />
                        </div>

                        <div>
                            <h3>{characters.name}</h3>
                            <h6>{characters.status === 'Alive' ? (

                                <>
                                    <span className='alive'></span>
                                    Alive
                                </>
                            ) : (
                                <>
                                    <span className='dead'></span>
                                    Dead
                                </>
                            )}</h6>
                            <p>                           
                                <span className='text-grey'>Episodios: </span>
                                <span>{characters.episode.length}</span>

                            </p>
                            <p>                           
                                <span className='text-grey'>Especie: </span>
                                <span>{characters.species}</span>

                            </p>

                        </div>

                    </div>
                ))}


            </div>

            <span onClick={resetCharacters} className='back-home'>Volver a la Home</span>


        </div>
    )
}
