import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Meme from "./components/Meme";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Meme />
      <Footer />
    </div>
  );
};

export default App;
