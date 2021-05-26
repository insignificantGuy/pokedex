import './App.css';
import React, { Component } from 'react';
import {CardList} from './components/Card-list/card-list.component.jsx';
import {SearchBox} from './components/SearchBox/searchBox.component.jsx';

const pokemons = require('json-pokemon');

class App extends Component{
  constructor(){
    super();
    this.state={
      pokemon:[],
      search:""
    }
  }

  componentDidMount(){
    this.setState({pokemon:pokemons});
  }

  onchangeMethod=(e)=>{
    this.setState({search:e.target.value});
  }

  render(){
    const {pokemon, search} = this.state;
    const filteredPokemon = pokemon.filter(pokemon =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    return(
      <div className="App">
      <h1>Pokedex</h1>
      <SearchBox
        className='search'
        placeholder='Search Pokemon'
        onchangeMethod={this.onchangeMethod}
      />
      <CardList pokemon={filteredPokemon} />
      </div>
    )
  }
}

export default App;
