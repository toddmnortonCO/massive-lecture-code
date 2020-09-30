import React, {Component} from 'react';
import Header from './Components/Header';
import Finder from './Components/Finder';
import Pokedex from './Components/Pokedex';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      caughtPokemon: []
    }
    this.catchPokemon = this.catchPokemon.bind(this);
  }

  componentDidMount(){
    axios.get('/api/caught-pokemon')
    .then(res => {
      this.setState({caughtPokemon: res.data})
    })
    .catch(err => console.log(err));
  }

  catchPokemon(pokemon){
    axios.post('/api/caught-pokemon', {pokemon: pokemon})
    .then(res => {
      this.setState({caughtPokemon: res.data})
    })
    .catch(err => console.log(err));
  }

  editName = (id, newName) => {
    let body = {name: newName};

    axios.put(`/api/caught-pokemon/${id}`, body)
    .then(res => {
      this.setState({caughtPokemon: res.data})
    })
    .catch(err => console.log(err));
  }

  releasePokemon = (id) => {
    axios.delete(`/api/caught-pokemon/${id}`)
    .then(res => {
      this.setState({caughtPokemon: res.data})
    })
    .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Finder 
          catchFn={this.catchPokemon}/>
        <Pokedex 
          caughtPokemon={this.state.caughtPokemon}
          nameFn={this.editName}
          releaseFn={this.releasePokemon}/>
      </div>
    )
  }
}

export default App;
