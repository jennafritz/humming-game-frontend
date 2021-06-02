import React, { Component } from "react"
import PlayersContainer from "./PlayersContainer"
import LoginForm from "../Component/LoginForm"
import RegisterForm from "../Component/RegisterForm"

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
            <div>
                Player Setup Container
                <PlayersContainer players={this.props.players} />
                {this.state.displayLoginForm ? <LoginForm toggleLoginForm={this.toggleLoginForm} handleLogin={this.props.handleLogin} /> : <button onClick={() => this.toggleLoginForm()} >Add registered player</button>}
                {this.state.displayRegisterForm ? <RegisterForm toggleRegisterForm={this.toggleRegisterForm} handleRegister={this.props.handleRegister} /> : <button onClick={() => this.toggleRegisterForm()} >Register player</button>}
                <button onClick={() => {
                    this.props.history.push("/gamesetup")
                    this.props.createUserGames()
                }}>Start</button>
            </div>
        )
    }
}