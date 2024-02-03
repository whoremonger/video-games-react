
import AllGames from '../components/AllGames'
import useFetchData from '../utils/useFetchData'

import { Outlet, NavLink, useLoaderData } from 'react-router-dom'
//Fetches the game data
//Will display all the games/AllGames component

//{error && <div className=" mb-3 flex justify-center text-red-500">{error}</div>}
//{isLoading && <h4 className="flex justify-center mt-20"><span className="loader"></span></h4>}

function GamesPage () {

  const loaderGames = useLoaderData()

  //const { data: games, isLoading, error } = useFetchData('http://localhost:8000/games')


  return (
    <>
      <h1 className="flex justify-center text-slate-300">All Games Page</h1>
      {loaderGames && <AllGames games={loaderGames} name="All Games Component" />}
    </>
  )

}

//loader react router style

export async function loader () {
  const res = await fetch('http://localhost:8000/games')
  if (!res.ok) {
    throw { message: 'Error. Failed to get games from the server.', status: 500 }
  }
  return res.json()
}

export default GamesPage

