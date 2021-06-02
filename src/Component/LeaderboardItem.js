import React, { Component } from "react"

export default class LeaderboardItem extends Component {
    render() {
        return (
            <div>
                {this.props.player.username}.......{this.props.player.point}
            </div>
        )
    }
}