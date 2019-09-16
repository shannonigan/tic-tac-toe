import React from "react";
import Square from './Square';
import { Grid, Header, Container, Button, } from "semantic-ui-react";


class Game extends React.Component {
  state = {
    squares: [
      { id: 1, clicked: false },
      { id: 2, clicked: false },
      { id: 3, clicked: false },
      { id: 4, clicked: false },
      { id: 5, clicked: false },
      { id: 6, clicked: false },
      { id: 7, clicked: false },
      { id: 8, clicked: false },
      { id: 9, clicked: false },
    ],
    arrUserChoices: [],
    arrCompChoices: [],

    choices: [
      { id: 1, choice: "X", },
      { id: 2, choice: "O", },
    ],

  }



  squarePressed = (i) => {
    const oppo = !i.clicked
    this.setState({squares: this.state.squares.map( square => {
      if (square.id === i.id) {
        return {i: i.id, clicked: oppo}
      } else {
        return square
      }
    })})
    this.setState({arrUserChoices: [i.id, ...this.state.arrUserChoices]}, () => this.gameLogic(this.arrUserChoices))
  }


  gameLogic = () => {

  }

  compChoice = () => {
    const available = this.state.squares.filter( square => { //array of avaible squares
      if (square.clicked === false) {
        return square
      }
    })

    const randNumber = Math.floor(Math.random()*available.length) //arr index number

    this.setState({squares: this.state.squares.map( square => {
      if (square.id === available[randNumber].id) {
        return {id: square.id, clicked: !square.clicked}
      }
      return square
    })})

    this.setState({ arrCompChoices: [available[randNumber].id, ...this.state.arrCompChoices]})
    
  }

  render() {
    return (
      <>

      <Header style={{ textAlign: "center", fontSize: "30px", marginTop: "25px" }}>
          Tic Tac Toe
      </Header>

      <Container>
        <div style={{ display: "flex", width: "600px", flexWrap: "wrap", }}>
        <Grid columns={3} style={{ width: "450px" }}>
          <Grid.Row>
            {this.state.squares.map(square => (<Square key={square.id} square={square} squarePressed={this.squarePressed}/> ))}
          </Grid.Row>
        </Grid>
        </div>
      </Container>

      </>
    );
  };
};

export default Game;

{/* <div class="ui grid">
  <div class="three column row">
    <div class="column"><img src="/images/wireframe/image.png" class="ui image" /></div>
    <div class="column"><img src="/images/wireframe/image.png" class="ui image" /></div>
    <div class="column"><img src="/images/wireframe/image.png" class="ui image" /></div>
  </div> */}