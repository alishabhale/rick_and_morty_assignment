// src/App.js
import React, { useState, useEffect } from 'react';
import CharacterCard from './components/Card';
import './App.css';
import heroImg from './images/home-logo.png'

function App() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  const fetchCharacters = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
    const data = await response.json();
    const slicedCharacters = data.results.slice(0, 6);
    setCharacters(slicedCharacters);
   // setCharacters(data.results);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <a href="/" className="logo">
            <img src={heroImg} alt="Rick and Morty Logo" width="40" height="auto"/>
          </a>
          <div className="nav-links">
            <a href="/about-us">About Us</a>
            <a href="/docs">Docs</a>
            <a href="/support-us">Support Us</a>
          </div>
        </nav>
      </header>
      <section className='section-class'>
        <h1 className='headline-format'>The Rick and Morty API</h1>
      </section>
      <section className='character-list-section'>
        <div className="character-list">
          {characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </section>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
      <footer className="footer">
        <p>© 2024 Rick and Morty by <b> Alisha B.</b></p>
      </footer>
    </div>
  );
}

export default App;
