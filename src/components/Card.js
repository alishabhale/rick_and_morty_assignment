import React from 'react';

function CharacterCard({ character }) {
  return (
    <article className="character-card">
      <img className='character-img' src={character.image} alt={character.name} />
      <div className='char-info'>
        <div className="section">
          <a href={`https://rickandmortyapi.com/api/character/${character.id}`} rel="noopener noreferrer" target="_blank">
            <h2>{character.name}</h2>
          </a>   
          <span >
            <span className={`status__icon ${character.status === 'Dead' ? 'dead' : ''}`}></span> {character.status} - {character.species} 
          </span>  
          <div>
            <span className="text-gray" style={{ paddingTop: '5px' }}>Last known location:</span>
            <a href={character.location.url}  target="_blank">{character.location.name}</a>
          </div>
          <div>
              <span className="text-gray" style={{ paddingTop: '10px' }}>First seen in:</span>
              <a href={character.origin.url}  target="_blank">{character.origin.name}</a>
          </div>
        </div>
      </div>
    </article>
  );
}
export default CharacterCard;
