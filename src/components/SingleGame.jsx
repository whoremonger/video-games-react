import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { deleteGame } from '../api/clientApi'

//import { deleteGame } from '../pages/GameDetailsPage'
import axios from 'axios'

function SingleGame ({ id, title, imageName, genres, year, console, description, datePassed }) {
  const navigate = useNavigate()


  /*
  //Create a message to say "Game Deleted"
  //maybe create some flash message syste
  //and a confirm delete screen

  async function deleteGame (id, e) {

    await axios.delete(`http://localhost:8000/games/${id}`).then((res) => {
      //delete success
      console.log("Delete Success!")
      navigate("/games")

    }).catch((err) => {
      throw new Error("Error Deleting the game!")
    })
  }
*/

  //maybe add extra error handling
  async function deleteHandler (id, e) {
    await deleteGame(id, e)
    navigate("/games")
  }

  //create a edit page //the form will be filled with the existing data
  async function editGame (id, e) {
    await axios.put(`http://localhost:8000/games/${id}`).then((res) => {
      //delete success
      console.log("Update Success!")
      navigate("/games")

    }).catch((err) => {
      throw new Error("Error Editing the game!")
    })
  }


  const imageBasePath = "../../public/images/"
  //use map for each card to insert he data first
  return (
    <div key={id} className="p-2 flex justify-center m-2 border-4 rounded-2xl border-blue-900">
      <div className="absolute">
        <button onClick={e => editGame(id, e)} className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold px-4 border-b-4 border-gray-800 rounded active:bg-emerald-900 active:border-emerald-700 shadow-md shadow-gray-700">Edit</button>
        <button onClick={e => deleteHandler(id, e)} className="bg-red-700 hover:bg-red-500 text-black font-bold px-4 border-b-4 border-gray-800 rounded active:bg-emerald-900 active:border-emerald-700 shadow-md shadow-gray-700">Delete</button>
      </div>
      <div className="p-2 m-8 inline-block bg-gray-800 max-w-sm rounded overflow-hidden shadow-2xl">
        <img style={{ backgroundImage: `url('${imageBasePath}${imageName}')`, height: 430, width: 330 }} className="w-full mx-auto m-4" src={`${imageBasePath}${imageName}`} alt={title} />
        <div className="px-6">
          <div className="font-bold text-3xl mb-2">{title}<span className="font-semibold text-xl mb-2"> ({year})</span></div>
          <div className="font-semibold text-lg mb-2">{console}</div>
          <p className="text-gray-500 text-base break-words">
            {description}
          </p>
        </div>

        <div className="px-6 pt-4 pb-2">
          {genres.map((genre) => (
            <span key={genre} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{genre}</span>
          ))}
          <div className="text-emerald-500 text-xl font-semibold p-2 m-2 flex justify-center">Passed: {datePassed}</div>
        </div>
      </div >
    </div>
  )
}

export default SingleGame




