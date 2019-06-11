import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/?format=json')
      .then(response => response.json())
      .then(onlineCharacters =>
        this.setState({ allCharacters: onlineCharacters.results })
      );
  }

  // My own function, so Arrow Function necessary
  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { allCharacters, searchfield } = this.state;
    const filteredCharacters = allCharacters.filter(character => {
      return character.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
      <div>
        <NavBar />
        <h1 className="text-center mt-4">Star Wars: The New Website</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <span>
          {(() => {
            if (allCharacters.length === 0) {
              return (
                <div className="text-center">
                  <span className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                  </span>
                </div>
              );
            }
          })()}
        </span>
        }
        <Scroll>
          <CardList characters={filteredCharacters} />
        </Scroll>
      </div>
    );
  }
}

export default App;
