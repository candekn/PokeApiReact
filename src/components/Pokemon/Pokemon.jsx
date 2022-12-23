import { useEffect, useState } from 'react'

const Pokemon = ({poke}) => {
    
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        if(poke.url){
            fetch(poke.url)
            .then((res) => res.json())
            .then((data) => {  
                setPokemon(data)
            })
        }
    }, [])

    return (
        <>{
            (pokemon != undefined) 
            ?
            <div className="nes-container is-dark is-rounded with-title is-centered" style={{margin:'1rem'}}>
                    <p className='title'>{ pokemon.name[0].toUpperCase() + pokemon.name.substring(1)+' - #'+ pokemon.id.toString().padStart(3, '0')}</p>
                    <img height="200" src={pokemon.sprites.front_default} />
                </div>
            : <i class="nes-pokeball"></i>
            }
        </>
    )
}

export default Pokemon