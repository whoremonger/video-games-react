import { useForm, Controller } from "react-hook-form"
import { gameSchema } from '../validations/gameSchema'
import { useState, useEffect } from 'react'
//import { imageSelectHandler, imageUploadHandler } from "../utils/imageUtil"
import { yupResolver } from "@hookform/resolvers/yup"
import { addGame } from '../api/clientApi'
import { Form } from 'react-router-dom' //React-router's form component
import axios from 'axios'
import {
  Outlet, NavLink, redirect, useActionData, useSubmit, useNavigate
} from 'react-router-dom'



//Everything ok now. Needs to add the edit/update page and action

//The submit works and redirect works and every is posting ok.
//Next try to see if I can insert the GameHookForm component on the NewGamePage to get the oncancel and submitting props 

function GameHookForm({ onCancel, submitting }) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const useState = ({
    selectedImage: null
  })

  ///form is filled out in component then it is validated and once it checks out it is submitted


  //them after submitted, it accepts the data. The useActionData is the function react router uses to handle the form
  //maybe put this in the submit function?
  //once data is retrieved it will navigate to the All Games page.

  const navigate = useNavigate()
  console.log(navigate.state)
  //handles submit state
  //const navigate = useNavigate()

  function cancelHandler() {
    navigate('/games/newGame')
  }

  //const MAX_FILE_SIZE = 50000000; //50mb

  //const validFileExtensions = { image: ['jpg', 'png', 'jpeg', 'svg'] }
  /*
    function isValidFileType (fileName, fileType) {
      return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1
    }
  */




  //handles all the errors and conditions from the form in a centerlized area

  //uses react hook form stuff and yup resolver for error triggers, submit, errors, and maybe getValues on form before submit
  //add file size limits and file type prob not in the schema
  const gameForm = useForm({ resolver: yupResolver(gameSchema) })
  const { register, handleSubmit, setError, setValue, getValues, trigger, formState: { errors } } = gameForm

  const imageSelectHandler = (e) => {
    const setState = ({
      selectedImage: e.target.files[0]
    })
  }

  const imageUploadHandler = () => {
    const fd = new FormData()
    fd.append('image', this.state.selectedImage, this.state.selectedImage.name)
    axios.post('http://localhost:8000/games', fd, {
      onUploadProgress: progressEvent => {
        console.log('Upload Progress' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
      }
    }).then(res => {
      console.log(res)
    })
  }



  /*
  const imageUpload = () => {
    const [image, setImage] = useState('')
    const handleImage = (e) => {
      console.log(e.target.files)
      setImage(e.target.files[0])
    }
    //const setState = ({
    //selectedImage: e.target.files[0]
    const imageUploadHandler = () => {
      const fd = new FormData()
      fd.append('image', image)
      axios.post('http://localhost:8000/games', fd, {
        onUploadProgress: progressEvent => {
          console.log('Upload Progress' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
        }
      }).then((res) => {
        console.log(res)
      }).catch((err) => {
        throw new Error("Image handle error")
      })
    }
  }
  */

  const onSubmit = async (data, e) => {

    //what the react router action does
    setIsSubmitting(true)
    try {
      e.preventDefault()
      await addGame(data)//saveGame(data)
      navigate("/games")
    }
    catch (err) {
      if (err.status === 422) {
        return err
      }
      throw err
    }
    setIsSubmitting(false)

  }

  const onSubmitError = async (errors) => {
    console.log("Error. Can't submit!", errors)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onSubmitError)} noValidate className="m-8 p-8 border-2 border-emerald-700 text-emerald-500" method="post" action="/games/newGame">

        <fieldset className="m-2 p-2">
          <p className="text-sm text-red-500 m-2">{errors.title?.message}</p>
          <label className="m-2 p-2 text-emerald-500" htmlFor="title">Title</label>
          <input className="m-1 p-1 bg-gray-300 hover:border-emerald-700 border-transparent border-2 text-blue-500 active:bg-emerald-100 active:border-emerald-700" placeholder="Game Title" id="title" type="text" {...register("title")} />
        </fieldset>

        <fieldset className="m-2 p-2">
          <p className="text-sm text-red-500 m-2">{errors.image?.message}</p>
          <button className="m-2 p-2 text-emerald-500" onClick={imageUploadHandler}>Upload Game Image</button>
          <input type="file" name="image" id="image" onChange={imageSelectHandler} accept="image/*" {...register("image")} />
        </fieldset>

        <fieldset className="m-6 p-6 grid-container space-y-3 border-2 rounded-2xl border-blue-900">
          <p className="text-sm text-red-500 m-2">{errors.genre?.message}</p>
          <h2 className="m-6 p-6">Select game genre(s):</h2>

          <div className="m-2 p-2 grid grid-cols-6">
            <p className="space-x-1">
              <input type="checkbox" id="action" name="genre" value="action" {...register("genre")} />
              <label htmlFor="action">Action</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="adventure" name="genre" value="adventure" {...register("genre")} />
              <label htmlFor="adventure">Adventure</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="fps" name="genre" value="fps" {...register("genre")} />
              <label htmlFor="fps">FPS</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="tacticalShooter" name="genre" value="tactical shooter" {...register("genre")} />
              <label htmlFor="tacticalShooter">Tactical Shooter</label>
            </p>
          </div>

          <div className="m-2 p-2 grid grid-cols-6">
            <p className="space-x-1">
              <input type="checkbox" id="rpg" name="genre" value="rpg" {...register("genre")} />
              <label htmlFor="rpg">RPG</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="puzzle" name="genre" value="puzzle" {...register("genre")} />
              <label htmlFor="puzzle">Puzzle</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="racing" name="genre" value="racing" {...register("genre")} />
              <label htmlFor="racing">Racing</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="platformer" name="genre" value="platformer" {...register("genre")} />
              <label htmlFor="platformer">Platformer</label>
            </p>
          </div>

          <div className="m-2 p-2 grid grid-cols-6">
            <p className="space-x-1">
              <input type="checkbox" id="rts" name="genre" value="rts" {...register("genre")} />
              <label htmlFor="rts">RTS</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="4x" name="genre" value="4x strategy" {...register("genre")} />
              <label htmlFor="4x">4X Strategy</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="turnedBased" name="genre" value="turn based" {...register("genre")} />
              <label htmlFor="turnedBased">Turn Based</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="sports" name="genre" value="sports" {...register("genre")} />
              <label htmlFor="sports">Sports</label>
            </p>
          </div>

          <div className="m-2 p-2 grid grid-cols-6">
            <p className="space-x-1">
              <input type="checkbox" id="mmo" name="genre" value="mmo" {...register("genre")} />
              <label htmlFor="mmo">MMO</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="survival" name="genre" value="survival" {...register("genre")} />
              <label htmlFor="survival">Survival</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="spaceSim" name="genre" value="space sim" {...register("genre")} />
              <label htmlFor="spaceSim">Space Sim</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="simulation" name="genre" value="simulation" {...register("genre")} />
              <label htmlFor="simulation">Simulation</label>
            </p>
          </div>

          <div className="m-2 p-2 grid grid-cols-6">
            <p className="space-x-1">
              <input type="checkbox" id="sandbox" name="genre" value="sandbox" {...register("genre")} />
              <label htmlFor="sandbox">Sandbox</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="fighting" name="genre" value="fighting" {...register("genre")} />
              <label htmlFor="fighting">Fighting</label>
            </p>

            <p className="space-x-1">
              <input type="checkbox" id="flightSim" name="genre" value="flight sim" {...register("genre")} />
              <label htmlFor="flightSim">Flight Sim</label>
            </p>

            <p className="space-x-1">
              <input type="checkbox" id="cityBuilder" name="genre" value="city builder"{...register("genre")} />
              <label htmlFor="cityBuilder">City Builder</label>
            </p>
          </div>

          <div className="m-2 p-2 grid grid-cols-6">
            <p className="space-x-1">
              <input type="checkbox" id="survivalHorror" name="genre" value="survival horror" {...register("genre")} />
              <label htmlFor="survivalHorror">Survival Horror</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="dating" name="genre" value="dating" {...register("genre")} />
              <label htmlFor="dating">Dating</label>
            </p>

            <p className="space-x-1">
              <input type="checkbox" id="children" name="genre" value="children"{...register("genre")} />
              <label htmlFor="children">Children</label>
            </p>

            <p className="space-x-1">
              <input type="checkbox" id="indie" name="genre" value="indie" {...register("genre")} />
              <label htmlFor="indie">Indie</label>
            </p>
          </div>
        </fieldset>

        <fieldset className="m-4 p-4">
          <p className="text-sm text-red-500 m-2">{errors.console?.message}</p>
          <label htmlFor="console">Select Gaming Console</label>
          <select className="m-2 p-2 bg-gray-800 border-emerald-800 hover:border-emerald-800 border-3" name="console" onChange={(e) => setValue('console', e.target.value, { shouldValidate: true })} {...register("console")}>
            <option value="">*Choose Console*</option>
            <option value="PC">PC</option>
            <option value="Xbox Series X">Xbox Series X</option>
            <option value="Xbox One">Xbox One</option>
            <option value="Xbox 360">Xbox 360</option>
            <option value="Xbox">Xbox</option>
            <option value="PS5">PS5</option>
            <option value="PS4">PS4</option>
            <option value="PS3">PS3</option>
            <option value="PS2">PS2</option>
            <option value="PlayStation">PlayStation</option>
            <option value="Switch">Switch</option>
            <option value="Wii U">Wii U</option>
            <option value="Wii">Wii</option>
            <option value="GameCube">GameCube</option>
            <option value="N64">N64</option>
            <option value="Super Nintendo">Super Nintendo</option>
            <option value="Nintendo">Nintendo</option>
            <option value="GameBoy">GameBoy</option>
            <option value="Nintendo DS">Nintendo DS</option>
            <option value="DreamCast">DreamCast</option>
            <option value="Sega Saturn">Sega Saturn</option>
            <option value="Sega Genesis">Sega Genesis</option>
            <option value="Atari">Atari</option>
          </select>
        </fieldset>

        <fieldset className="m-2 p-2">
          <p className="text-sm text-red-500 m-2">{errors.year?.message}</p>
          <label className="m-2 p-2 text-emerald-500" htmlFor="year">Release Year</label>
          <input className="m-1 p-1 bg-gray-300 hover:border-emerald-700 border-transparent border-2 text-blue-500 active:bg-emerald-100 active:border-emerald-700" placeholder="Release Year - YYYY" id="year" type="number" name="year" {...register("year")} />
        </fieldset>

        <fieldset className="m-2 p-2">
          <p className="text-sm text-red-500 m-2">{errors.description?.message}</p>
          <label className="m-2 p-2 text-emerald-500 flex" htmlFor="description">Game Description</label>
          <textarea className="m-2 p-2 bg-gray-300 hover:border-emerald-700 border-transparent border-2 text-blue-500 active:bg-emerald-100 active:border-emerald-700" id="description" type="text" name="description" placeholder="Brief Summary of the Game" rows="8" cols="60" {...register("description")}></textarea>
        </fieldset>

        <fieldset className="m-2 p-2">
          <p className="text-sm text-red-500 m-2">{errors.datePassed?.message}</p>
          <label className="m-2 p-2 text-emerald-500" htmlFor="datePassed">Date Passed</label>
          <input className="m-1 p-1 bg-gray-300 hover:border-emerald-700 border-transparent border-2 text-blue-500 active:bg-emerald-100 active:border-emerald-700" id="datePassed" type="text" placeholder="00/00/00" name="datePassed" {...register("datePassed")} />
        </fieldset>


        <div className="flex justify-center">
          <div className="inline-flex justify-right">
            <button className="m-2 p-2 bg-gray-800 text-emerald-500 hover:border-emerald-700 hover:bg-gray-700 border-4 border-emerald-900 active:bg-emerald-100 active:border-emerald-700 shadow-md shadow-gray-700" type="reset" onClick={cancelHandler} disabled={submitting}>Clear</button>
          </div>

          <div className="inline-flex justify-left">
            <button className="m-2 p-2 bg-gray-800 text-emerald-500 hover:border-emerald-700 hover:bg-gray-700 border-4 border-emerald-900 active:bg-emerald-100 active:border-emerald-700 shadow-md shadow-gray-700" disabled={submitting}>{submitting ? 'Submitting...' : 'Add Game!'}</button>
          </div>
        </div>
      </form>

      {/*}This will eval the data and check if there is a error {maybe change this} and display submit/no submit error then it will call the form component  {*/}
      {/*}
      {data && data.isError && <p className="flex justify-center m-2 p-2 text-emerald-500">{data.message}</p>}
      <GameHookForm onCancel={cancelHandler} submitting={useNavigation.state === 'submitting'} />
      {*/}

    </>

  )
}

export default GameHookForm

//this will get all the form data via react router action
//then it will save or add the game (call the saveGame function)
//if it fails it will return a 422 error, if success add game and redirect to All Games page
/*
export async function newGameAction ({ request }) {
  const data = await request.formData()

  try {
    await saveGame(data)
    //console.log(`title: ${data.data}`)
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


//Called in the action, it will get all te cleaned data and assign them into each data variable for the json file
//then it will post or add to the json file 

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


  //problem with  this is the axios post - convert fetch to axios post

  //Does post req to add a game
  //addGame(data)

  
    const res = await axios.post('http://localhost:8000/games', {
      title: data.title,
      imageName: data.image[0].name,
      genres: data.genre,
      console: data.console,
      year: data.year,
      description: data.description,
      datePassed: data.datePassed
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err, err.res)
      throw new Error("Error! Failed to add game!!")
    })
  
    
    const res = await fetch('http://localhost:8000/games', {
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
  */





