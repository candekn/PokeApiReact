import { useEffect, useState } from 'react'
import Pokemon from '../Pokemon/Pokemon'

const ListaDePokemons = () => {
    let [listaPokemones, setListaPokemones] = useState([]);
    const [limit, setLimit] = useState(150);
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
        .then((res) => res.json())
        .then((data) => {    
            setListaPokemones(data.results);     
        })
    }, [limit]);

    const aumentarLimite = () => {
        setLimit(limit + 50)
    }

    return (
        <div style={{display:'flex', justifyContent:'center', flexFlow: 'column'}}>

        <div style={{display:'flex', justifyContent:'center', flexWrap: 'wrap'}}>
            { 
                listaPokemones.length > 0 
                ? listaPokemones.map((poke, i) => <Pokemon key={i} poke={poke} />)
                : 'No hay Pokemones'
            }
        </div>
        <button style={{margin:'2em 20em'}} type="button" className="nes-btn is-error" onClick={aumentarLimite}>Cargar Más</button>
        </div>

    )
}

export default ListaDePokemons