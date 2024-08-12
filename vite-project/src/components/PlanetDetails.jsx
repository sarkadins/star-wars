const PlanetDetails = ({ planet, planets, onBackButton }) => {

  return (
    <>
      <div className="planet-details">
        <h2>{planet.name}</h2>
        <p>Population: {planet.population}</p>
        <p>Orbital preiod: {planet.orbital_period}</p>
        <p>Diameter: {planet.diameter}</p>
        <p>Climate: {planet.climate}</p>
        <p>Gravity: {planet.gravity}</p>
        <p>Terrain: {planet.terrain}</p>
        <p>Surface water: {planet.surface_water}</p>
      </div>
      <button className='back-button' onClick={() => onBackButton(planets)}>Back</button>
    </>

  )
}

export default PlanetDetails;