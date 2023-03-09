import './App.css';
import React from 'react';
import MovieDescription from './components/MovieDescription';
import InputSearch from './components/InputSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputSearch/>
        <MovieDescription/>
      </header>
    </div>
  );
}

export default App;