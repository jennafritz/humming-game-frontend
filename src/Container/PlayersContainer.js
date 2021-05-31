import React, { Component } from "react"
import AddPlayersContainer from "./AddPlayersContainer"

export default class Players extends Component {
    render() {
        return (
            <div>
                Players Container
                <AddPlayersContainer />
            </div>
        )
    }
}