import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import myPunkt from "../../assets/Download.png"

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">

        <Social />

        <div className="home__content grid">
        <Data />
          <div className="home__img"></div>
         
        </div>
        
      
       
      </div> 
     
 <ScrollDown />



    </section>
  );
};

export default Home;
