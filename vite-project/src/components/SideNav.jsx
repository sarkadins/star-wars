import { useState, useEffect } from "react";
import Characters from "./Characters";
import Planets from "./Planets";

const SideNav = ({ onLogoClick }) => {
  const [view, setView] = useState('home')
  const [counter, setCounter] = useState(1)
  const [isPending, setIsPending] = useState(null)

  const [characters, setCharacters] = useState(null)

  const [planets, setPlanets] = useState(null)

  //CHARACTERS

  useEffect(() => {
    setIsPending(true)
    const fetchCharactersData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/?page=${counter}`)
        const charactersData = await response.json()
        setCharacters(charactersData.results)
      } catch (error) {
        console.error(error)
      } finally {
        setIsPending(false)
      }
    }
    fetchCharactersData()
  }, [counter])

  const handleCharactersClick = () => {
    setView('characterList')
  }

  // PLANETS

  useEffect(() => {
    setIsPending(true)
    const fetchPlanetsData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/planets/?page=${counter}`)
        const planetsData = await response.json()
        setPlanets(planetsData.results)
      } catch (error) {
        console.error(error)
      } finally {
        setIsPending(false)
      }
    }
    fetchPlanetsData()
  }, [counter])

  const handlePlanetsClick = () => {
    setView('planetList')
  }

  const handlePreviousClick = () => {
    setCounter(counter - 1)
  }
  const handleNextClick = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      {isPending && view === 'home' ? (<h2>LOADING...</h2>) : (
        <div className="nav-bar">
          {characters && view === 'home' && (
            <button className='characters-button' onClick={handleCharactersClick}>Characters</button>
          )}<p></p>
          {planets && view === 'home' && (
            <button className='planets-button' onClick={handlePlanetsClick}>Planets</button>
          )}
        </div>
      )}
      <Characters view={view}
        setView={setView}
        counter={counter}
        onPrevClick={handlePreviousClick}
        onNextClick={handleNextClick}
        characters={characters}
        onLogoClick={onLogoClick} />

      <Planets view={view}
        setView={setView}
        counter={counter}
        onPrevClick={handlePreviousClick}
        onNextClick={handleNextClick}
        planets={planets}
        onLogoClick={onLogoClick} />
    </>
  )
}

export default SideNav;