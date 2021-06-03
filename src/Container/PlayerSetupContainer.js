import React, { Component } from "react"
import PlayersContainer from "./PlayersContainer"
import LoginForm from "../Component/LoginForm"
import RegisterForm from "../Component/RegisterForm"
import TurnForm from "../Component/TurnForm"

export default class PlayerSetupContainer extends Component {

    constructor() {
        super()
        this.state = {
            displayLoginForm: false,
            displayRegisterForm: false
        }
    }

    toggleLoginForm = () => {
        // console.log("display login")
        this.setState({
            displayLoginForm: !this.state.displayLoginForm
        })
    }

    toggleRegisterForm = () => {
        // console.log("display login")
        this.setState({
            displayRegisterForm: !this.state.displayRegisterForm
        })
    }



    render() {
        return (
            <div className="flex">
                <h2>Set Up Your Game</h2>
                <h3>Add Players</h3>
                
                <PlayersContainer players={this.props.players} />
                {this.state.displayLoginForm ? <LoginForm toggleLoginForm={this.toggleLoginForm} handleLogin={this.props.handleLogin} /> : <button onClick={() => this.toggleLoginForm()} >Add registered player</button>}
                {this.state.displayRegisterForm ? <RegisterForm toggleRegisterForm={this.toggleRegisterForm} handleRegister={this.props.handleRegister} /> : <button onClick={() => this.toggleRegisterForm()} >Register player</button>}
                <h3>Select Number Of Turns</h3>
                <TurnForm setTurns={this.props.setTurns} history={this.props.history} createUserGames={this.props.createUserGames}/>

                
            </div>
        )
    }
}