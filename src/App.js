import Navbar from "./components/Navbar/navbar";
import HeaderFirst from "./components/headerFirst/header.js";
import HeaderSecond from "./components/headerSecond/header.js";
import Headerthird from "./components/headerthird/header.js";
import HeaderFour from "./components/headerFour/header.js"
import HeaderFive from "./components/headerFive/header.js"
import Carousel from "./components/Carousel/carousel.js"

function App() {
  return (
    <div>
      <Navbar />
       <HeaderFirst />
      <HeaderSecond />
      <Headerthird/>
      <HeaderFour/>
     <Carousel/>
     <HeaderFive/>
    </div>
  );
}

export default App;
