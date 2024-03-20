//This the client side portion of the CRUD API for react router
import axios from 'axios'


//adds a game to GamesPage component
export async function addGame(data) {
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
}

//gets all the games to GamesPage component
//get this to work!
export async function getAllGames() {
  const res = await axios.get('http://localhost:8000/games/').catch(err => {
    console.log(err, err.res)
    throw new Error("Error! Failed to get all of the games!!")
  })
  return res.data
}

export async function getSingleGame(params) {
  const gameId = params.id
  try {
    const res = await axios.get('http://localhost:8000/games/' + gameId)
    return res.data
  }
  catch (err) {
    throw { message: "Error! Failed to fetch that game!", status: 500 }
  }

}

export async function deleteGame(id, e) {

  await axios.delete(`http://localhost:8000/games/${id}`).then((res) => {
    //delete success
    console.log("Delete Success!")
  }).catch((err) => {
    throw new Error("Error Deleting the game!")
  })
}