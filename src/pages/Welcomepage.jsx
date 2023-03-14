import React from "react";
import Header from "../components/Header";
import "./Welcomepage.css";


function Welcomepage() {
  return (
    <div className="container">
      <Header />
      <div className="content0">
        
        <div className="child content1">
          <h1 className="content2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, commodi optio? 
          </h1>
          <h2 className="content2">Dolor in, voluptatibus iusto minima eos aut porro.</h2>
        </div>
        <img src="https://images.pexels.com/photos/600114/pexels-photo-600114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="nice"  className="pav1 child"/>
        <h1 className="child content2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, a laudantium quibusdam sit nemo commodi optio? 
          </h1>
      </div>
    </div>
  );
}

export default Welcomepage;
