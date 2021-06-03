import React, { Component } from "react"

export default class HomePageContainer extends Component {
    render() {
        return (
            <div className="homepage-container-div flex">
                <h1>Hummingbird</h1>
                <br/>
                <button onClick={() => {
                    this.props.history.push("/playersetup")
                    this.props.handleNewGame()
                }}>Start a New Game</button>
            </div>
        )
    }
}