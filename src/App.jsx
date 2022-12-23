import './App.css'
import ListaDePokemons from './components/ListaDePokemons/ListaDePokemons'

function App() {

  return (
    <div style={{backgroundColor:'#212529'}}>
    <p style={{paddingBottom:'2em'}}></p>
      <p style={{textAlign:'center'}}> <span className="nes-text is-error" style={{fontSize:'xxx-large'}}>PokeApi </span> <i className="nes-ash"></i> </p>
      <ListaDePokemons />
    </div>
  )
}

export default App
