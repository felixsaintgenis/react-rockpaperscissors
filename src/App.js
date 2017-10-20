import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChoices = this.handleChoices.bind(this)
    this.state= {
      nbRound: 0,
      playerWins: 0,
      computerWins: 0,
      draw: 0
    };
  }

  computerChoice() {

    const choiceArray= ["R","P","S"];
    let randomChoice= Math.floor(Math.random() * (3 - 0)) + 0;
    let finalChoice=choiceArray[randomChoice];
    return finalChoice;

  };


handleChoices(playerChoice) {
  let computerChoice=this.computerChoice()
  let scoreGame=this.scoreGame(playerChoice,computerChoice)
  return scoreGame;
}

scoreGame(playerChoice,computerChoice) {

if (playerChoice==="R" && computerChoice==="S") {
  this.setState({
    playerWins: this.state.playerWins+=1,
    nbRound: this.state.nbRound+=1
   })

} else if (playerChoice==="P" && computerChoice==="R") {
  this.setState({
    playerWins: this.state.playerWins+=1,
    nbRound: this.state.nbRound+=1
   })

} else if (playerChoice==="S" && computerChoice==="P") {
  this.setState({
    playerWins: this.state.playerWins+=1,
    nbRound: this.state.nbRound+=1 })

} else if (playerChoice === computerChoice) {
  this.setState({draw: this.state.draw+=1,
  nbRound: this.state.nbRound+=1})

} else {
  this.setState({
    computerWins: this.state.computerWins+=1,
    nbRound: this.state.nbRound+=1
   })

}

}

  render() {
    return (
      <div className="App">
        <p>choose your weapon</p>
        <div className="gameImage">

          <img src="http://pngimg.com/uploads/stone/stone_PNG13603.png" onClick={()=>{this.handleChoices('R')}}></img>
          <img src="http://images.clipartpanda.com/stack-of-paper-png-stack_of_paper.png" onClick={()=>{this.handleChoices('P')}}></img>
          <img src="http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Scissors-PNG-Transparent-Image-1-1.png" onClick={()=>{this.handleChoices('S')}}></img>
        <div className="gameDisplay">

          <p>round: {this.state.nbRound}</p>
          <p>human: {this.state.playerWins}</p>
          <p>computer: {this.state.computerWins}</p>
          <p>draw: {this.state.draw}</p>


        </div>
        </div>
      </div>
    );
  }
}


export default App;
