import React from "react";

// Navbar globals
import Navbar from "./components/Navbar";

// React Router Dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import CharactersPage from "./pages/CharactersPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/characters">
              <CharactersPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
