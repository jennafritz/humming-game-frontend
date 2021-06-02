import React, { Component } from "react"
import SongOptionsContainer from "./SongOptionsContainer"
import SelectWinnersContainer from "./SelectWinnersContainer"

export default class GamePlayContainer extends Component {
    render() {
        return (
            <div>
                {`Number of turns: ${this.props.turns}`}
                <SongOptionsContainer />
                <SelectWinnersContainer />
            </div>
        )
    }
}