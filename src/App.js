import React from "react";
import "./css/reset.css";
import "./css/style.css";
//import MenuCart from "./containers/MenuCart";
import Navbar from "./components/Navbar";
import Header from './components/Header';
import Feature from "./components/Feature";
import Offer from "./components/Offer";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
     <Home />
    <div className="content">
        
      </div> 
        
      <div className="container">      
      <div id="app-holder">
        <div>    
                
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
