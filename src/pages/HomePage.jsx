import { Outlet, NavLink } from 'react-router-dom'
//Serves as the Home intro page before the AllGames is displayed
function HomePage () {
  return (
    <div>
      <h1 className="flex justify-center text-slate-300">Welcome to the Video Game Tracker App</h1>

      <h2 className="flex justify-center text-slate-300">Add a game you passed!</h2>
    </div>
  )
}

export default HomePage





