import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
      players: [],
      currentGame: {},
      turns: 15
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

  createUserGames = () => {
    this.state.players.map(player => {
      fetch("http://localhost:9292/user_games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: player.id,
          game_id: this.state.currentGame.id
        })
      })
        .then(res => res.json())
        .then(response => console.log(response))
    })
  }

  handleLogin = (userObj) => {
    // userObj has username and password from state
    // send it to backend
    let searchedObj = {}
    fetch(`http://localhost:9292/users?username=${userObj.username}&password=${userObj.password}`)
      .then(res => res.json())
      .then(searchedUserObj => {
        searchedObj = searchedUserObj
        //  console.log(searchedObj)
        // console.log(searchedObj.message)
        // console.log("hi")

        // make a post req if user not found
        if (searchedObj.message === "User does not exist") {
          alert("User not found. Please register to continue.")
        }
        // otherwise get the user
        else {
          this.setState({
            players: [...this.state.players, searchedObj]
          })
          // console.log("Fetch error")
        }

      })
  }


  handleRegister = (userObj) => {
    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
    })
      .then(res => res.json())
      .then(newUserObj => {
        this.setState({
          players: [...this.state.players, newUserObj]
        })
      }
        // newUserObj => console.log(newUserObj)
      )
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
      .then((newGameInstance) => this.setState({
        currentGame: newGameInstance
      }))
  }

  render() {
    return (
      <Router>
        <div className="App" >
          <Route exact path="/" render={(routerProps) => <HomePageContainer handleNewGame={this.handleNewGame} {...routerProps} />} />
          <Route exact path="/playersetup" render={(routerProps) => <PlayerSetupContainer handleLogin={this.handleLogin} handleRegister={this.handleRegister} players={this.state.players} createUserGames={this.createUserGames} {...routerProps} />} />
          <Route exact path="/gamesetup" render={(routerProps) => <GameSetupContainer {...routerProps} />} />
          <Route exact path="/gameplay" render={(routerProps) => <GamePlayContainer {...routerProps} turns={this.state.turns} />} />
          <Route exact path="/gameover" render={(routerProps) => <EndOfGameContainer {...routerProps} />} />
        </div >
      </Router>
    )
  }
}

export default App
