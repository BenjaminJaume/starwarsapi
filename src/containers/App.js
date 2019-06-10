import React, { Component } from 'react';
import CardList from '../components/CardList';
import { people } from '../components/People';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center mt-4">Star Wars: The New Website</h1>
        <CardList people={people} />
      </div>
    );
  }
}

export default App;
