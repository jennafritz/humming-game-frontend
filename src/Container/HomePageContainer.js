import React, { Component } from "react"

export default class HomePageContainer extends Component {
    render() {
        return (
            <div>
                HomePage Container
                <h1>Welcome to Hummingbird</h1>
                <button onClick={() => this.props.handleNewGame()}>Start a New Game</button>
            </div>
        )
    }
}