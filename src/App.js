import React from "react";
import "./App.css";
import About from "./components/About";
import Photos from "./components/Photos";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Card from "./components/NewsFeed";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <NavBar />
        <Route path="/" exact component={Card} />
        <Route path="/about" component={About} />
        <Route path="/photos" component={Photos} />
      </div>
    </BrowserRouter>
  );
}

export default App;
