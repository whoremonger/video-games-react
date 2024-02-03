import { Outlet, NavLink } from 'react-router-dom'
import GamesPage from '../pages/GamesPage'
//import GameCard from './components/GameCard'

function GamesLayout () {
  return (
    <div className="container">
      <h2>Games Layout</h2>
      <Outlet />
    </div>
  )
}

export default GamesLayout