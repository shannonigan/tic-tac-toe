import React from 'react';
import Home from "./component/Home";
import Game from "./component/Game";
import NoMatch from "./component/NoMatch";
import './App.css';
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Navbar from "./component/Navbar"

const App = () => (
  <>
  <Navbar />

    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
        <Route component={NoMatch} />
      </Switch>
      </Container>
  
  </>
);

export default App;



// Tic Tac Toe
// Basic Objectives

// Create react app
// Create the Tic Tac Toe game
// Just start with 1 player vs computer. 
// Remember to utilize React's modularity 
// (make a component that can be used in many places.)
 

// Bonus Objectives

// Add a second player.
// Style the game
 