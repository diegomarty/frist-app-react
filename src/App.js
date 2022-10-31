import React from "react";
import "./App.css";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";

export default function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className="App-logo" src="/logo.png" alt="Giffy logo" />
        </Link>
        <Route 
          component={Home} 
          path="/" 
        />
        <Route
          component={SearchResults}
          path="/search/:keyword" 
        />
        <Route 
        component={Detail}
        path='/gif/:id'
        />
      </section>
    </div>
  );
}
