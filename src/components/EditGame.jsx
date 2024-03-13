import {
  Outlet, NavLink, redirect, useActionData, useSubmit, useNavigate
} from 'react-router-dom'
import axios from 'axios'
import GameHookForm from './components/GameHookForm'

function EditGame ({ id, title, imageName, genres, year, console, description, datePassed }) {
  const navigate = useNavigate()//For the edit game look into 2 way data binding to edit while the game card is displayed

  //Create a message to say "Game Updated"

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

  //Before creating the edit page find a way to break the GameHookForm functions into reusable files


  //use map for each card to insert he data first

  //The SingleGame component shown to edit in real time

  //and the GameHookForm component on the side (maybe break it down into form sections) 
  //add in component props
  return (
    <>

      <SingleGame />
      <GameHookForm />

    </>
  )
}

export default EditGame




