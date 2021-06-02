import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePageContainer from "./Container/HomePageContainer"
import PlayerSetupContainer from "./Container/PlayerSetupContainer"
import GameSetupContainer from "./Container/GameSetupContainer"
import GamePlayContainer from "./Container/GamePlayContainer"
import EndOfGameContainer from "./Container/EndOfGameContainer"
import LeaderboardContainer from "./Container/LeaderboardContainer"
// import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      songs: [],
      players: [],
      currentGame: {},
      turns: 15,
      decades: [],
      currentSongs: [],
    }
  }

  handleReceiveSongs = () => {
    let decadeArray = this.state.decades.map(decade => {
      return `${decade}=${decade}`
    })
    let decadeQuery = decadeArray.join("&")
    console.log(decadeQuery)
    fetch(`http://localhost:9292/songs?${decadeQuery}`)
      .then(res => res.json())
      .then((songsArray) => {
        // console.log(songsArray)
        this.setState({
          songs: songsArray
        })
      })
      .then(() => this.makeCurrentSongs())
  }

  handleAddPoints = (player) => {
    let playerWinner = ({...player,point:player.point + 10})
    let updatedPlayers = this.state.players.map(playerInstance => playerInstance.id === player.id ? playerWinner : playerInstance)
    this.setState({
      players: updatedPlayers
    })

  }

  handleSendPoints = () => {
    // let userArray = this.state.players.map(player => {
    //   return `${player.id}=${player.id}`
    // })
    // let userQuery = userArray.join("&")
    this.state.players.map(player => {
      fetch(`http://localhost:9292/users/${player.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          point: player.point
        })
      })
    })
  }

  makeCurrentSongs = () => {
    let updatedArray = this.state.songs
    let currentSongs = updatedArray.splice(0,4)
    this.setState({
      songs: updatedArray,
      currentSongs: currentSongs
    })
    // let currentSongs = this.state.songs.shift(4)
    console.log("all remaining songs: ",this.state.songs.length)
    console.log("current songs: ", currentSongs)
  }

  updateTurns = () => {
    this.setState({
      turns: this.state.turns - 1
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
    // add check if user exists
    let searchedObj = {}
    fetch(`http://localhost:9292/check_user?username=${userObj.username}`)
    .then(res => res.json())
    .then(searchedUserObj => {
      searchedObj = searchedUserObj
      if (searchedObj.message === "User does not exist") {
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
      )}
      else {
      alert("This username is already taken")
      }
    })
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

  chooseDecade = (decade) => {
    if(this.state.decades.includes(decade)){
      let uniqueDecades = this.state.decades.filter(existingDecade => existingDecade != decade)
    this.setState({
      decades: uniqueDecades
    })
    }
    else {
      this.setState({
        decades: [...this.state.decades, decade]
      })
    }}

  render() {
    return (
      <Router>
        <div className="App" >
          <Route exact path="/" render={(routerProps) => <HomePageContainer handleNewGame={this.handleNewGame} {...routerProps} />} />
          <Route exact path="/playersetup" render={(routerProps) => <PlayerSetupContainer handleLogin={this.handleLogin} handleRegister={this.handleRegister} players={this.state.players} createUserGames={this.createUserGames} {...routerProps} />} />
          <Route exact path="/gamesetup" render={(routerProps) => <GameSetupContainer {...routerProps} makeCurrentSongs={this.makeCurrentSongs} handleReceiveSongs={this.handleReceiveSongs} chooseDecade={this.chooseDecade}/>} />
          <Route exact path="/gameplay" render={(routerProps) => <GamePlayContainer {...routerProps} handleAddPoints={this.handleAddPoints} updateTurns={this.updateTurns} makeCurrentSongs={this.makeCurrentSongs} currentSongs={this.state.currentSongs} turns={this.state.turns} handleSendPoints={this.handleSendPoints} players={this.state.players}/>} />
          <Route exact path="/gameover" render={(routerProps) => <EndOfGameContainer {...routerProps} />} />
        </div >
      </Router>
    )
  }
}

export default App

