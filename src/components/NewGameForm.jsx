import { Outlet, NavLink, Form, redirect, useActionData } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
//import { useForm, SubmitHandler } from "react-hook-form"
//Serves as the Home intro page before the AllGames is displayed
// recommend to use axios for image data
//use event function to show file is uploaded
//use event to handle the image when submitted
function NewGameForm ({ onCancel, submitting }) {
  const useState = ({
    selectedImage: null
  })

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

  // remember to randomize image name and set file size in backend for image and set/insert image into the react image folder 
  //remember to do validation so bad input wont go through!!!!
  return (
    <div className="container flex justify-center m-8 p-8 font-mono text-xl text-emerald-500">

      <Form className="m-8 p-8 border-2 border-emerald-700 text-emerald-500" method="post" action="/games/newGame">

        <fieldset className="m-2 p-2">
          <label className="m-2 p-2 text-emerald-500" htmlFor="title">Title</label>
          <input className="m-1 p-1 bg-gray-300 hover:border-emerald-700 border-transparent border-2 text-blue-500 active:bg-emerald-100 active:border-emerald-700" placeholder="Game Title" id="title" type="text" name="title" required />
        </fieldset>

        <fieldset className="m-2 p-2">
          <button className="m-2 p-2 text-emerald-500" onClick={imageUploadHandler}>Upload Game Image</button>
          <input type="file" name="image" id="image" onChange={imageSelectHandler} accept="image/*" required />
        </fieldset>


        <fieldset className="m-6 p-6 grid-container space-y-3 border-2 rounded-2xl border-blue-900">
          <h2 className="m-6 p-6">Select game genre(s):</h2>

          <div className="m-2 p-2 grid grid-cols-6">
            <p className="space-x-1">
              <input type="checkbox" id="action" name="genre" value="action" />
              <label for="action">Action</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="adventure" name="genre" value="adventure" />
              <label for="adventure">Adventure</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="fps" name="genre" value="fps" />
              <label for="fps">FPS</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="tacticalShooter" name="genre" value="tactical shooter" />
              <label for="tacticalShooter">Tactical Shooter</label>
            </p>
          </div>

          <div className="m-2 p-2 grid grid-cols-6">
            <p className="space-x-1">
              <input type="checkbox" id="rpg" name="genre" value="rpg" />
              <label for="rpg">RPG</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="puzzle" name="genre" value="puzzle" />
              <label for="puzzle">Puzzle</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="racing" name="genre" value="racing" />
              <label for="racing">Racing</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="platformer" name="genre" value="platformer" />
              <label for="platformer">Platformer</label>
            </p>
          </div>

          <div className="m-2 p-2 grid grid-cols-6">
            <p className="space-x-1">
              <input type="checkbox" id="rts" name="genre" value="rts" />
              <label for="rts">RTS</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="4x" name="genre" value="4x strategy" />
              <label for="4x">4X Strategy</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="turnedBased" name="genre" value="turn based" />
              <label for="turnedBased">Turn Based</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="sports" name="genre" value="sports" />
              <label for="sports">Sports</label>
            </p>
          </div>

          <div className="m-2 p-2 grid grid-cols-6">
            <p className="space-x-1">
              <input type="checkbox" id="mmo" name="genre" value="mmo" />
              <label for="mmo">MMO</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="survival" name="genre" value="survival" />
              <label for="survival">Survival</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="spaceSim" name="genre" value="space sim" />
              <label for="spaceSim">Space Sim</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="simulation" name="genre" value="simulation" />
              <label for="simulation">Simulation</label>
            </p>
          </div>

          <div className="m-2 p-2 grid grid-cols-6">
            <p className="space-x-1">
              <input type="checkbox" id="sandbox" name="genre" value="sandbox" />
              <label for="sandbox">Sandbox</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="fighting" name="genre" value="fighting" />
              <label for="fighting">Fighting</label>
            </p>

            <p className="space-x-1">
              <input type="checkbox" id="flightSim" name="genre" value="flight sim" />
              <label for="flightSim">Flight Sim</label>
            </p>

            <p className="space-x-1">
              <input type="checkbox" id="cityBuilder" name="genre" value="city builder" />
              <label for="cityBuilder">City Builder</label>
            </p>
          </div>

          <div className="m-2 p-2 grid grid-cols-6">
            <p className="space-x-1">
              <input type="checkbox" id="survivalHorror" name="genre" value="survival horror" />
              <label for="survivalHorror">Survival Horror</label>
            </p>
            <p className="space-x-1">
              <input type="checkbox" id="dating" name="genre" value="dating" />
              <label for="dating">Dating</label>
            </p>

            <p className="space-x-1">
              <input type="checkbox" id="children" name="genre" value="children" />
              <label for="children">Children</label>
            </p>

            <p className="space-x-1">
              <input type="checkbox" id="indie" name="genre" value="indie" />
              <label for="indie">Indie</label>
            </p>
          </div>
        </fieldset>

        <fieldset className="m-4 p-4">
          <label for="console">Select Gaming Console</label>

          <select className="m-2 p-2 bg-gray-800 border-emerald-800 hover:border-emerald-800 border-3" id="console" name="console" required>
            <option value="0">Console</option>
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
          <label className="m-2 p-2 text-emerald-500" for="year">Release Year</label>
          <input className="m-1 p-1 bg-gray-300 hover:border-emerald-700 border-transparent border-2 text-blue-500 active:bg-emerald-100 active:border-emerald-700" placeholder="Release Year" id="year" type="number" name="year" required />
        </fieldset>

        <fieldset className="m-2 p-2">
          <label className="m-2 p-2 text-emerald-500 flex" for="description">Game Description</label>
          <textarea className="m-4 p-4 bg-gray-300 h-50 w-200 min-h-max min-w-max hover:border-emerald-700 border-transparent border-2 text-blue-500 active:bg-emerald-100 active:border-emerald-700" id="description" type="text" name="description" placeholder="Brief Summary of the Game" rows="8" cols="60" required></textarea>
        </fieldset>

        <fieldset className="m-2 p-2">
          <label className="m-2 p-2 text-emerald-500" for="datePassed">Date Passed</label>
          <input className="m-1 p-1 bg-gray-300 hover:border-emerald-700 border-transparent border-2 text-blue-500 active:bg-emerald-100 active:border-emerald-700" id="datePassed" type="text" placeholder="00/00/00" name="datePassed" required />
        </fieldset>


        <div className="flex justify-center">
          <div className="inline-flex justify-right">
            <button className="m-2 p-2 bg-gray-800 text-emerald-500 hover:border-emerald-700 hover:bg-gray-700 border-4 border-emerald-900 active:bg-emerald-100 active:border-emerald-700 shadow-md shadow-gray-700" type="button" onClick={onCancel} disabled={submitting}>Cancel</button>
          </div>
          <div className="inline-flex justify-left">
            <button className="m-2 p-2 bg-gray-800 text-emerald-500 hover:border-emerald-700 hover:bg-gray-700 border-4 border-emerald-900 active:bg-emerald-100 active:border-emerald-700 shadow-md shadow-gray-700" disabled={submitting}>{submitting ? 'Submitting...' : 'Add Game!'}</button>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default NewGameForm



