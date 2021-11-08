import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components
import Dedalus from "./components/Dedalus.jsx"
import Farmhouse from "./components/Farmhouse.jsx"
import HoneyRoad from "./components/HoneyRoad.jsx"
import PhoHong from "./components/PhoHong.jsx"
import Poco from "./components/Poco.jsx"
import RedPanda from "./components/RedPanda.jsx"
import ShyGuy from "./components/ShyGuy.jsx"
import SkinnyPancake from "./components/SkinnyPancake.jsx"
import Home from "./components/Home.jsx"

//for programmatic way...not sure if i'll be able to figure it out
import DefaultRestPage from "./components/DefaultRestPage.jsx"

function App() {

  return (
    <div>
      {/*Routing and rendering based on url path */}
      <BrowserRouter>
        <Routes>
          <Route path="/api/:restaurantId" element={<DefaultRestPage />} />
          <Route path="/home" element={<Home />} />
          <Route path ="/" element={<Home />} />
          <Route path="/dedalus" element={<Dedalus />} />
          <Route path="/farmhouse" element={<Farmhouse />} />
          <Route path="/honey-road" element={<HoneyRoad />} />
          <Route path="/pho-hong" element={<PhoHong />} />
          <Route path="/poco" element={<Poco />} />
          <Route path="/red-panda" element={<RedPanda />} />
          <Route path="/shy-guy" element={<ShyGuy />} />
          <Route path="/skinny-pancake" element={<SkinnyPancake />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
