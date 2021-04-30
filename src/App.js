import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";

function App() {
  return (
    <>
      <Particles
      className = "particles-canvas"
        params={{
          particles:{
            // Object 1 (frequency of dots (don't go below 100...))
            number: {
              value: 25, 
              density: {
                enable: true,
                value_area: 1750
              }
            }, 
            // Object 2 (shape)
            shape: {
              type: "circle",
              stroke: {
                width: 3,
                color: "#f9ab00"
              }
            }
          }
        }}/>
      <Navbar/>
      <Header/>
      <AboutMe/>
    </>

  );
}

export default App;
