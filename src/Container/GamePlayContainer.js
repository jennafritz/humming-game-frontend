import React, { Component } from "react"
import SongOptionsContainer from "./SongOptionsContainer"
import SelectWinnersContainer from "./SelectWinnersContainer"

export default class GamePlayContainer extends Component {
    constructor() {
        super()
        this.state = {
            buttonStatus: false
        }
    }

    disableButtons = () => {
        this.setState({
            buttonStatus: true
        })
    }

    enableButtons = () => {
        if (this.props.turns > 0) {
            this.setState({
                buttonStatus: false
            })
        }
    }

    render() {
        return (
            <div className="flex">
                {`Remaining turns: ${this.props.turns - 1}`}
                <SongOptionsContainer currentSongs={this.props.currentSongs} />
                <SelectWinnersContainer buttonStatus={this.state.buttonStatus} disableButtons={this.disableButtons} handleAddPoints={this.props.handleAddPoints} players={this.props.players} />
                {this.props.turns === 1
                    ? <button onClick={() => {
                        this.props.handleSendPoints()
                        setTimeout(() => this.props.history.push("/gameover"), 1000)
                        this.props.sortPlayers()
                    }}>Finish</button>
                    : <button onClick={() => {
                        this.props.makeCurrentSongs()
                        this.props.updateTurns()
                        this.enableButtons()
                        // this.props.handleSendPoints() only when remaining turns is 0
                    }}>Next</button>}
            </div>
        )
    }
}