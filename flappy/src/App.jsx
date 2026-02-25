import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Gallery from "./components/Gallery/Gallery";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Features />
      <Gallery />
      <CTA />
      <Footer />
    </>
  );
}

export default App;