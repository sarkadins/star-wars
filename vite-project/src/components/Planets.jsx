import { useState } from "react";
import PlanetDetails from "./PlanetDetails";

const Planets = ({ view, setView, counter, onPrevClick, onNextClick, planets }) => {

  const [selectedPlanet, setSelectedPlanet] = useState(null)

  const handleDetailsClick = (planet) => {
    setSelectedPlanet(planet);
    setView('planetDetails')
  }

  const handleBackButton = () => {
    setView('planetList')
  }

  return (
    <>
      <div className="planet-list">
        {planets && view === 'planetList' && (
          <div className="planet-row">
            {planets.map((planet, index) => (
              <div key={index} className='nameAndDetails'>
                <h2 key={index}>{planet.name}</h2>
                <button onClick={() => { handleDetailsClick(planet) }}>Details</button>
              </div>
            ))}
          </div>
        )}
        <div className="counter-buttons">
          {view === 'planetList' && <button
            onClick={onPrevClick}
            disabled={counter === 1}>
            {'<'}</button>}
          {view === 'planetList' &&
            <span>page: {counter}</span>}
          {view === 'planetList' && <button onClick={onNextClick}
          disabled={counter === 6}>{'>'}</button>}
        </div>
        {view === 'planetList' && <button onClick={() => { setView('home') }}>Back</button>}
      </div>
      {selectedPlanet && view === 'planetDetails' &&
        <PlanetDetails planet={selectedPlanet} planets={planets} onBackButton={handleBackButton} />
      }
    </>
  )
}

export default Planets;