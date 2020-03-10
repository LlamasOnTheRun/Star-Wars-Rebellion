import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Welcome } from './components/game_start';
import { SectorsAndPlanets } from './components/sectors_and_planets';

function App() {
  return (
    <Router>
      {/*<nav>
        <Link to="/" component={Welcome}>Start a game</Link>
        <Link to="/about" component={Home}>Settings</Link>
      </nav>*/}
      <div>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/test">
          <SectorsAndPlanets />
        </Route>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Hom1e</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
