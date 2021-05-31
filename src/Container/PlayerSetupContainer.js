import React, { Component } from "react"
import PlayersContainer from "./PlayersContainer"

export default class PlayerSetupContainer extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    render() {
        return (
            <div>
                Player Setup Container
                <PlayersContainer />
                <form onSubmit={(event) => {
                    event.preventDefault()
                    this.props.handleSubmit(this.state)
                }}>
                    <label >Username:
                        <input onChange={(event) => { this.setState({ username: event.target.value }) }} type="text" name="username" value={this.state.username} />
                    </label>
                    <label>Password:
                        <input onChange={(event) => { this.setState({ password: event.target.value }) }} type="password" name="password" value={this.state.password} />
                    </label>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}