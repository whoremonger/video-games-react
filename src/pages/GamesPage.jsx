
import AllGames from '../components/AllGames'
import { Suspense } from 'react'
import { getAllGames } from '../api/clientApi'
//import useFetchData from '../utils/useFetchData'
//import axios from 'axios'
import { Outlet, NavLink, useLoaderData, Await } from 'react-router-dom'
//Fetches the game data
//Will display all the games/AllGames component

//maybe put delete game function here

//{error && <div className=" mb-3 flex justify-center text-red-500">{error}</div>}
//{isLoading && <h4 className="flex justify-center mt-20"><span className="loader"></span></h4>}

function GamesPage() {


  const loaderGames = useLoaderData()

  //const { data: games, isLoading, error } = useFetchData('http://localhost:8000/games')


  return (
    <>
      <h1 className="flex justify-center text-slate-300">All Games Page</h1>
      <Suspense fallBack={<p>Loading...</p>}>
        {loaderGames && <AllGames games={loaderGames} />}
      </Suspense>
    </>
  )

}

//loader react router style
//get this to work
export async function loader() {
  return await getAllGames()
}
//axios
/*
try {
  const res = await axios.get('http://localhost:8000/games/')
  return res.data
}
catch (err) {
  throw { message: "Error! Failed to get games from the server!", status: 500 }
}
*/


//fetch
/*
const res = await fetch('http://localhost:8000/games')
if (!res.ok) {
  throw { message: 'Error. Failed to get games from the server.', status: 500 }
}
return res.json()
*/


export default GamesPage

