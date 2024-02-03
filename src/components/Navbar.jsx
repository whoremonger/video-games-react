//This will be a navbar component to be shown in all pages of the app. 
//LInks will include Back, all Games(or index), new Game, Edit Game, Delete Game possibly a about page to display purpose of app and author

//Look up built in link components
//When react router installed use <NavLink to=""></NavLink> component can invoke isActive or isPending state
//<Link to=""/> is just a regular link

//Add Icons
import { Outlet, NavLink } from 'react-router-dom'

function Navbar () {
  return (
    <div className="flex justify-center font-mono text-xl text-emerald-500">
      <ul className="inline-flex">
        <li className="m-2 p-2 hover:border-emerald-700 border-transparent border-2 active:bg-emerald-100"><NavLink to="/">Home</NavLink></li>
        <li className="m-2 p-2 hover:border-emerald-700 border-transparent border-2 active:bg-emerald-100"><NavLink to="games">All Games</NavLink></li>
        <li className="m-2 p-2 hover:border-emerald-700 border-transparent border-2 active:bg-emerald-100"><NavLink to="games/newGame">Add Game</NavLink></li>
        <li className="m-2 p-2 hover:border-emerald-700 border-transparent border-2 active:bg-emerald-100"><NavLink to="about">About</NavLink></li>
        <li className="m-2 p-2 hover:border-emerald-700 border-transparent border-2 active:bg-emerald-100"><NavLink to="contact">Contact Me</NavLink></li>
      </ul>
    </div>

  )
}

export default Navbar