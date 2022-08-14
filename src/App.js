import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BeerDetails from "./pages/BeerDetails";
import RandomBeer from "./pages/RandomBeer";
import AddBeer from "./pages/AddBeer";
import BeersList from "./pages/BeersList"
import Error from "./pages/Error"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<BeersList />}/>
        <Route path="/beers/:beerId" element={<BeerDetails />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<AddBeer />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
