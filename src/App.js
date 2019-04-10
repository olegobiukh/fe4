import React from "react";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import data from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills data={data} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
