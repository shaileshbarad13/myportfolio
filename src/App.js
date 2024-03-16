import React from "react";
import "./App.css";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Skills from "./component/skills/Skills";
// import Hobbies from "./component/hobbies/Hobbies";
import Education from "./component/education/Education";
import Project from "./component/projects/Project";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import ScrollUp from "./component/scrollUp/ScrollUp";

const App = () => {
  return (
    <>
      <main className="main">
        
        <Header />
        <Home />
        <About />
        <Skills />
        {/* <Hobbies /> */}
        <Education />
        <Project />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
