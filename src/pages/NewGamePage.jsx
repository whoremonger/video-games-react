import {
  Outlet, NavLink, redirect, useActionData, useNavigate,
  useNavigation
} from 'react-router-dom'
//import NewGameForm from '../components/NewGameForm'
import GameHookForm from '../components/GameHookForm'
import axios from 'axios'
//import { yupResolver } from "@hookform/resolvers/yup"
//import { useForm, SubmitHandler } from "react-hook-form" //add this 
//import * as yup from "yup"


//find some way to handle the React-hook-form submit. Possibly by transfers "data" from the hook form to the Game Page
//the react-hook-form validations doesnt work without its submit function on the form.
//find a way to mix react routers formData and react hook forms submit data
function NewGamePage () {

  return (
    <div>
      {/*}
      {data && data.isError && <p className="flex justify-center m-2 p-2 text-emerald-500">{data.message}</p>}
      <NewGameForm onCancel={cancelHandler} submitting={navigation.state === 'submitting'} />
      {*/}

      {data && data.isError && <p className="flex justify-center m-2 p-2 text-emerald-500">{data.message}</p>}
      <GameHookForm onCancel={cancelHandler} submitting={useNavigation.state === 'submitting'} />
    </div>
  )
}

export default NewGamePage

export async function saveGame (data) {

  const game = {
    //title: data.get("title"),
    title: data.title,
    //imageName: data.get("imageName"),
    imageName: data.image[0].name,
    //genres: data.getAll("genre"),
    genres: data.genre,
    //console: data.get("console"),
    console: data.console,
    //year: data.get("year"),
    year: data.year,
    //description: data.get("description"),
    description: data.description,
    //datePassed: data.get("datePassed")
    datePassed: data.datePassed
  }

  //then once added to the file this will fetch ALL the data from the json file, turn it into a string to be used into the AllGames component to be displayed
  //That component will show all the games

  const res = await axios.post('http://localhost:8000/games', {
    method: 'POST',
    body: JSON.stringify(game),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  //if it doesnt work and error will be displayed via react router Error loader
  if (!res.ok) {
    throw res
  }

}



