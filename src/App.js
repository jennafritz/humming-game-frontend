import React, { Component } from 'react'
import HomePageContainer from "./Container/HomePageContainer"
import PlayerSetupContainer from "./Container/PlayerSetupContainer"
import GameSetupContainer from "./Container/GameSetupContainer"
import GamePlayContainer from "./Container/GamePlayContainer"
import EndOfGameContainer from "./Container/EndOfGameContainer"
// import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      songs: [],
      players: []
    }
  }

  handleSendSongs = () => {
    fetch("http://localhost:9292/songs")
      .then(res => res.json())
      .then((songsArray) => {
        this.setState({
          songs: songsArray[0]
        })
      })
  }

  handlePlayerSubmit = (user) => {
    // check if user exists in db; if so, make a player from their info
    // if not, create a new user and then make a new player from their info
    // add to players array in state
    // create a PlayerGame
  }

  handleUser = () => {

  }


  handleNewGame = () => {
    // change to PlayersContainer via Route

    // instantiate new Game instance in backend (fetch?)
    fetch("http://localhost:9292/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "game 1"
      })
    })
      .then(res => res.json())
      .then((newGameInstance) => console.log(newGameInstance))
  }

  render() {
    return (
      <div className="App">
        <HomePageContainer handleNewGame={this.handleNewGame} />
        <PlayerSetupContainer />
        <GameSetupContainer />
        <GamePlayContainer />
        <EndOfGameContainer />
      </div>
    )
  }
}

export default App
