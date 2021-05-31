import React, { Component } from "react"
import SongOptionsContainer from "./SongOptionsContainer"
import SelectWinnersContainer from "./SelectWinnersContainer"

export default class GamePlayContainer extends Component {
    render() {
        return (
            <div>
                GamePlayContainer Container
                <SongOptionsContainer />
                <SelectWinnersContainer />
            </div>
        )
    }
}