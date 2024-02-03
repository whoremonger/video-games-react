//This is the header or title of the app. It is a designed banner of sorts
//Add icon?

import { Outlet, NavLink } from 'react-router-dom'
function Header () {
  return (
    <div className="flex justify-center mx-auto p-2 m-2 border-4 rounded-2xl border-blue-800 bg-slate-300">
      <header>
        <h1 className="text-blue-600 text-3xl font-bold">Video Game App</h1>
      </header>
    </div>
  )
}

export default Header