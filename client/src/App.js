import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components
import Dedalus from "./components/Dedalus.jsx";
import Farmhouse from "./components/Farmhouse.jsx";
import HoneyRoad from "./components/HoneyRoad.jsx";
import PhoHong from "./components/PhoHong.jsx";
import Poco from "./components/Poco.jsx";
import RedPanda from "./components/RedPanda.jsx";
import ShyGuy from "./components/ShyGuy.jsx";
import SkinnyPancake from "./components/SkinnyPancake.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div>
      {/*Routing and rendering based on url path */}
      <BrowserRouter>
        <Routes>
          {/* Route to homepage */}
          <Route path="/home" element={<Home />} />
          {/* Route to homepage */}
          <Route path="/" element={<Home />} />
          {/* Route to dedalus page */}
          <Route path="/dedalus" element={<Dedalus />} />
          {/* Route to farmhouse page */}
          <Route path="/farmhouse" element={<Farmhouse />} />
          {/* Route to Honey Road page */}
          <Route path="/honey-road" element={<HoneyRoad />} />
          {/* Route to Pho Hong page */}
          <Route path="/pho-hong" element={<PhoHong />} />
          {/* Route to Poco page */}
          <Route path="/poco" element={<Poco />} />
          {/* Route to Red Panda page */}
          <Route path="/red-panda" element={<RedPanda />} />
          {/* Route to Shy Guy page */}
          <Route path="/shy-guy" element={<ShyGuy />} />
          {/* Route to Skinny Pancake page */}
          <Route path="/skinny-pancake" element={<SkinnyPancake />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
