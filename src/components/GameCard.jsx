//a component to display 1 game in a card format: 
//id: 1,
//title: "The Division 2",
//image: "../assets/images/theDivision2.jpg", (filename will be randomly renamed for security reasons)
//genre: "Tactical Shooter",
//console: "PC",
//year: "2019",
//description: "A 3rd person military tactical shoot set in a destroyed Washington DC where you fight off various factions from taking over the city.",
//datePassed: "7/11/2022" 
//Hard coded for now just to see how the card looks then later fill the fields with variables
//Make game release year is before game is passed!!!
//make genre an array and can be added many times to the #badges because each game has many genre types
//consider putting images in public folder so it wont be included in installing the app (images will be separate from source code)
import theDivision2 from '../../public/images/theDivision2.jpg'


function GameCard ({ title, genres, year, console, description, datePassed }) {

  return (
    <div className="p-2 m-8 inline-block bg-gray-800 max-w-sm rounded overflow-hidden shadow-xl">
      <img className="w-full object-scale-down" src={theDivision2} alt="The Division 2" />
      <div className="px-6">
        <div className="font-bold text-3xl mb-2">{title}<span className="font-semibold text-xl mb-2"> ({year})</span></div>
        <div className="font-semibold text-lg mb-2">{console}</div>
        <p className="text-gray-500 text-base">
          {description}
        </p>
      </div>


      <div className="px-6 pt-4 pb-2">
        {genres.map(genre => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={genre}>#{genre}</span>
        ))}
      </div>
      <div className="text-emerald-500 text-xl font-semibold p-2 m-2 flex justify-center">Passed: {datePassed}</div>
    </div>
  )
}

export default GameCard