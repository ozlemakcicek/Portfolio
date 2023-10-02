import React from "react";
import "./App.css";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualifikation/Qualification";
import Projects from "./components/projects/Projects";
// import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Work from "./components/work/Work";
import Blogs from "./components/blogs/Blogs";


function App() {
  return (
    <div className="container">
      <Header />

      <main className="main">
        <Home />
        <About />
        <Projects />

        <Skills />
        <Blogs />
        <Qualification />
        <Work />
        {/* <Testimonials/> */}
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
