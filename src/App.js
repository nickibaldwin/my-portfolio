import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <main className="text-gray-900 bg-gray-200 body-font">
      {/* <Navbar /> */}
      <About />
      <Portfolio />
      <Projects />
      <Contact />
    </main>
  )
}
