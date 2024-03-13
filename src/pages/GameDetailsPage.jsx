import SingleGame from '../components/SingleGame'
import { Outlet, NavLink, useLoaderData } from 'react-router-dom'
import axios from 'axios'
//import { useHistory, useParams } from 'react-router-dom'

//put in a single game component instead of AllGames
//click the game card and it will show the details of that 1 game and go to games/:id
function GameDetailsPage () {

  //continue to work and fix the delete function
  const loaderSingleGame = useLoaderData()
  return (
    <>
      <h1 className="flex justify-center text-slate-300">Single Game Page</h1>
      {loaderSingleGame && <SingleGame id={loaderSingleGame.id} title={loaderSingleGame.title} imageName={loaderSingleGame.imageName} genres={loaderSingleGame.genres} year={loaderSingleGame.year} console={loaderSingleGame.console} description={loaderSingleGame.description} datePassed={loaderSingleGame.datePassed} />}
    </>
  )
}

//axios needs no .json() 
export async function loader ({ params }) {
  const gameId = params.id
  try {
    const res = await axios.get('http://localhost:8000/games/' + gameId)
    return res.data
  }
  catch (err) {
    throw { message: "Error! Failed to fetch that game!", status: 500 }
  }



  /*
  const gameId = params.id

  const res = await fetch('http://localhost:8000/games/' + gameId)
  if (!res.ok) {
    throw { message: "Error! Failed to fetch that game!", status: 500 }
  }
  return res.json()
  */
}


export default GameDetailsPage

