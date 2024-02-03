import { Outlet, NavLink } from 'react-router-dom'


function SingleGame ({ id, title, imageName, genres, year, console, description, datePassed, name }) {
  const imageBasePath = "../../public/images/"
  //use map for each card to insert he data first
  return (
    <div className="p-2 flex justify-center m-2 border-4 rounded-2xl border-blue-900">
      <h1 className="p-2 m-2 flex justify-center text-blue-400 text-xl">{name}</h1>
      <div key={id} className="p-2 m-8 inline-block bg-gray-800 max-w-sm rounded overflow-hidden shadow-2xl">
        <img style={{ backgroundImage: `url('${imageBasePath}${imageName}')`, height: 430, width: 330 }} className="w-full mx-auto m-4" src={`${imageBasePath}${imageName}`} alt={title} />
        <div className="px-6">
          <div className="font-bold text-3xl mb-2">{title}<span className="font-semibold text-xl mb-2"> ({year})</span></div>
          <div className="font-semibold text-lg mb-2">{console}</div>
          <p className="text-gray-500 text-base">
            {description}
          </p>
        </div>

        <div className="px-6 pt-4 pb-2">
          {genres.map((genre) => (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={genre.id}>#{genre}</span>
          ))}
          <div className="text-emerald-500 text-xl font-semibold p-2 m-2 flex justify-center">Passed: {datePassed}</div>
        </div>
      </div >
    </div>
  )
}


export default SingleGame