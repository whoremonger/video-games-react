//displays main layout of the entire site or page
//uses children
//<Navbar/>
//<Header/>
//<GameCard/> 
//<Footer/>
import { Outlet, NavLink } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
//import GameCard from './components/GameCard'

function MainLayout () {
  return (
    <div className="container">
      <Navbar />
      <header><Header /></header>
      <main><Outlet /></main>
      <footer><Footer /></footer>
    </div>
  )
}

export default MainLayout