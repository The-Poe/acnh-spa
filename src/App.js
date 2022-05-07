import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./acnhLogo.png";
// import { Counter } from "./features/counter/Counter";
import { Navbar } from "./features/navbar/Navbar";
import { Home } from "./features/home/Home";
import { About } from "./features/about/About";
import { Contact } from "./features/contact/Contact";
import "./App.css";
import { PageNotFound } from "./features/pageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route>
                <PageNotFound />
              </Route>
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
