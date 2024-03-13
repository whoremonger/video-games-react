// this is the home or root component of the entire site
//import { useState, useEffect } from 'react'
import MainLayout from './layouts/MainLayout'
import GamesLayout from './layouts/GamesLayout'
//import GameCard from './components/GameCard'
//import AllGames from './components/AllGames'
//import useFetchData from './utils/useFetchData'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GamesPage, { loader as gamesLoader } from './pages/GamesPage'
import GameHookForm from './components/GameHookForm' //{ newGameAction }
//import EditGame from './components/EditGame'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'
import ErrorDetailsPage from './pages/ErrorDetailsPage'
import ErrorAllGamesPage from './pages/ErrorAllGamesPage'
import GameDetailsPage, { loader as singleGameLoader } from './pages/GameDetailsPage'

//Decided to replace NewGamePage with GameHookForm so all the data is fetched and gathered in one place

//import AllGames from './components/AllGames'
//<GameCard title="Cyberpunk 2077" genres={["RPG", "action"]} console="PC" description="Cyberpunk 2077 description" year="2020" datePassed="10/23/2021" />
//<GameCard title="The Division 2" genres={["tactical shooter", "action"]} console="PS4" description="The Division 2 description" year="2019" datePassed="7/11/2020" />
//<GameCard title="No Man's Sky" genres={["survival", "exploration", "space flight"]} console="Switch" description="No Man's Sky description" year="2016" datePassed="4/32/2017" />
//<GameCard title="Mafia: Definitive Edition" genres={["crime", "action"]} console="Xbox One" description="The Division 2 is set in washington D.C. when a terrorist group takes over so the Division is called to take down the threat." year="2020" datePassed="6/7/2023" />

//shows single game in same page as all games--routing/layout problem

//add a defered page component to add a spinner so you load parts of the page while waiting to fetch the data
function App () {
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="games" element={<GamesLayout />}>
          <Route index element={<GamesPage />} loader={gamesLoader} errorElement={<ErrorAllGamesPage />} />
          <Route path=":id" element={<GameDetailsPage />} loader={singleGameLoader} errorElement={<ErrorDetailsPage />} />

        </Route>
        <Route path="/games/newGame" element={<GameHookForm />} />

        <Route path="*" element={<NotFound />} />
      </Route>

    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
