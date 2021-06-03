import React, { Component } from "react"
import SelectWinner from "../Component/SelectWinner"

export default class SelectWinnersContainer extends Component {
    render() {
        return (
            <div className="flex">
                {this.props.players.map(player => 
                <SelectWinner buttonStatus={this.props.buttonStatus} disableButtons={this.props.disableButtons} handleAddPoints={this.props.handleAddPoints} player={player}/>
                )}
            </div>
        )
    }
}