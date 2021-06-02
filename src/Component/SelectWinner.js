import React, { Component } from "react"

export default class SelectWinner extends Component {
    render() {
        return (
            <div>
                <button disabled={this.props.buttonStatus} onClick={() => {
                    this.props.handleAddPoints(this.props.player)
                    this.props.disableButtons()
                    }}>{this.props.player.username}</button>
            </div>
        )
    }
}