const CharacterDetails = ({ character, characters, onBackButton }) => {

  return (
    <>
    <div className="character-details">
      <h2>{character.name}</h2>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Hair: {character.hair_color}</p>
      <p>Skin: {character.skin_color}</p>
      <p>Eye: {character.eye_color}</p>
      <p>Birth year: {character.birth_year}</p>
      <p>Gender: {character.gender}</p>
    </div> 
    <button className='back-button' onClick={() => onBackButton(characters)}>Back</button>   
    </>
  )
}
export default CharacterDetails