import { useState } from 'react';
import CharacterDetails from './CharacterDetails';

const Characters = ({ view, setView, counter, onPrevClick, onNextClick, characters }) => {

  const [selectedCharacter, setSelectedCharacter] = useState(null)

  const handleDetailsClick = (character) => {
    setSelectedCharacter(character)
    setView('characterDetails')
  }
  const handleBactButton = () => {
    setView('characterList')
  }
  return (
    <>
      <div className='character-list'>
        {characters && view === 'characterList' && (
          characters.map((character, index) => (
            <div key={index} className='nameAndDetails'>
              <h2 key={index}>{character.name}</h2>
              <button onClick={() => handleDetailsClick(character)}>Details</button>
            </div>
          ))
        )}
        <div className="counter-buttons">
          {view === 'characterList' && <button
            onClick={onPrevClick}
            disabled={counter === 1}>
            {'<'}</button>}
          {view === 'characterList' &&
            <span>page: {counter}</span>}
          {view === 'characterList' && <button onClick={onNextClick}>{'>'}</button>}
        </div>
        {view === 'characterList' && <button onClick={() => { setView('home') }}>Back</button>}
      </div>
      {selectedCharacter && view === 'characterDetails' &&
        <CharacterDetails character={selectedCharacter} characters={characters} onBackButton={handleBactButton} />
      }
    </>
  )
}

export default Characters;