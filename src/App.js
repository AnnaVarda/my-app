import React from "react";
import "./css/reset.css";
import "./css/style.css";
import MenuCart from "./containers/MenuCart";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
     
    <div className="content">
        <Home />
      </div> 
        
      <div className="container">      
      <div id="app-holder">
        <div>    
          <MenuCart />        
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
