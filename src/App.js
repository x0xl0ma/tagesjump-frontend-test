import React from "react";
import Main from "./pages/Main";
import Navbar from "./components/navbar/Navbar";
import "./fonts/stylesheet.css";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
