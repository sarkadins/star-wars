import './App.css'
import logo from './sw-logo.png'
import { BrowserRouter, createBrowserRouter, NavLink } from 'react-router-dom'

import Home from './Home'

function App() {

  return (
    <>
    
      <img className="main-logo" src={logo} alt='sw-logo' />
     
        <div className="app">
        
            <Home />
        
        </div>
    </>
     
    
  )
}


export default App