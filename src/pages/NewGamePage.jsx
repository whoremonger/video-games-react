import {
  Outlet, NavLink, redirect, useActionData, useNavigate,
  useNavigation
} from 'react-router-dom'
//import NewGameForm from '../components/NewGameForm'
import GameHookForm from '../components/GameHookForm'
//import { yupResolver } from "@hookform/resolvers/yup"
//import { useForm, SubmitHandler } from "react-hook-form" //add this 
import * as yup from "yup"

//import { addGameSchema } from '../validations/addGameValidator'
//maybe add the action here and props?

function NewGamePage () {

  const data = useActionData()

  const navigation = useNavigation()
  console.log(navigation.state)

  const navigate = useNavigate()

  function cancelHandler () {
    navigate('/')
  }

  return (
    <div>
      {/*}
      {data && data.isError && <p className="flex justify-center m-2 p-2 text-emerald-500">{data.message}</p>}
      <NewGameForm onCancel={cancelHandler} submitting={navigation.state === 'submitting'} />
  {*/}
      {data && data.isError && <p className="flex justify-center m-2 p-2 text-emerald-500">{data.message}</p>}
      <GameHookForm onCancel={cancelHandler} submitting={navigation.state === 'submitting'} />
    </div>
  )
}

export default NewGamePage

//give name attributes to inputs in form
//main submition function
export async function newGameAction ({ request }) {
  const data = await request.formData()

  try {
    await saveGame(data)
  }
  catch (err) {
    if (err.status === 422) {
      return err
    }
    throw err
  }
  //put in validator file

  return redirect('/games')
}

export async function saveGame (data) {
  const game = {
    title: data.get("title"),
    imageName: data.get("image"),
    genres: data.getAll("genre"),
    console: data.get("console"),
    year: data.get("year"),
    description: data.get("description"),
    datePassed: data.get("datePassed")
  }

  /*
    if (game.title.trim().length === 0) {
      return { isError: true, message: 'Must have a game Title!!' }
    }
    if (game.imageName.trim().length === 0) {
      return { isError: true, message: 'Must have a image!!' }
    }
    if (game.genres.length === 0) {
      return { isError: true, message: 'Need to check a genre!' }
    }
    if (game.console === 0) {
      return { isError: true, message: 'Select a game console!' }
    }
    if (game.year.trim().length === 0) {
      return { isError: true, message: 'Enter year game was released!' }
    }
    if (game.description.trim().length <= 10) {
      return { isError: true, message: 'Enter a longer description! At least 10 characters!' }
    }
    if (game.datePassed.trim().length <= 4) {
      return { isError: true, message: 'Enter date game was passed!' }
    }
  */

  // put form field validations

  const res = await fetch('http://localhost:8000/games', {
    method: 'POST',
    body: JSON.stringify(game),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw res
  }

}
