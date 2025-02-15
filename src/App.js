import { Routes, Route } from 'react-router'
import Home from './views/Home/Home'
import BeerList from './views/BeerList/BeerList'
import BeerDetails from './views/BeerDetails/BeerDetails'
import NewBeer from './views/NewBeer/NewBeer'
import Navbar from './components/Navbar/Navbar'
import './App.css'


function App() {



  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/beers" element={ <BeerList/> }/>
        <Route path="/beers/:id" element={ <BeerDetails/> }/>
        <Route path="/new-beer" element={ <NewBeer/> }/>
      </Routes>
    </div>
  )
}

export default App
