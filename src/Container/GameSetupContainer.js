import React, { Component } from "react"
import DecadeButtonsContainer from "./DecadeButtonsContainer"

export default class GameSetupContainer extends Component {
    render() {
        return (
            <div>
                <DecadeButtonsContainer chooseDecade={this.props.chooseDecade}/>
                <button onClick={() => {
                    this.props.history.push("/gameplay")
                    this.props.handleReceiveSongs()
                }}>Start</button>
            </div>
        )
    }
}