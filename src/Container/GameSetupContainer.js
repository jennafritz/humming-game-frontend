import React, { Component } from "react"
import DecadeButtonsContainer from "./DecadeButtonsContainer"

export default class GameSetupContainer extends Component {
    render() {
        return (
            <div>
                GameSetupContainer Container
                <DecadeButtonsContainer />
                <button onClick={() => {
                    this.props.history.push("/gameplay")
                    // function to send four songs
                }}>Start</button>
            </div>
        )
    }
}