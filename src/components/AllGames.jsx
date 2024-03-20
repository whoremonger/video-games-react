import { Outlet, NavLink } from 'react-router-dom'

//customize the hover and link highlight
//insert custom error pages for each route or api call
function AllGames ({ games, name }) {

  const imageBasePath = "../../public/images/" //make sure uploaded image goes into that folder
  //use map for each card to insert he data first
  return (
    <div className="mx-auto p-2 m-2 border-4 rounded-2xl border-blue-900">
      {games.map((game) => (
        <NavLink key={game.id} className="hover:border-emerald-300" to={`/games/${game.id}`}>
          <div key={game.id} className="p-2 m-8 inline-block bg-gray-800 hover:bg-emerald-900 max-w-sm rounded overflow-hidden border-transparent active:bg-emerald-700 shadow-xl">
            <img style={{ backgroundImage: `url('${imageBasePath}${game.imageName}')`, height: 430, width: 330 }} className="w-full mx-auto m-4" src={`${imageBasePath}${game.imageName}`} alt={game.title} />
            <div className="px-6">
              <div className="font-bold text-3xl mb-2">{game.title}<span className="font-semibold text-xl mb-2"> ({game.year})</span></div>
              <div className="font-semibold text-lg mb-2">{game.console}</div>
              <p className="text-gray-500 text-base break-words">
                {game.description}
              </p>
            </div>

            <div className="px-6 pt-4 pb-2">
              {game.genres.map((genre, index) => (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={index}>#{genre}</span>
              ))}
              <div className="text-emerald-500 text-xl font-semibold p-2 m-2 flex justify-center">Passed: {game.datePassed}</div>
            </div>
          </div >
        </NavLink>
      ))}
    </div>
  )
}

//For AllGames use a GameCard component and then use a map to repeat for as many game entries there are.
export default AllGames