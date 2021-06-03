import React, { Component } from "react"
import LeaderboardContainer from "../Container/LeaderboardContainer.js"

export default class EndOfGameContainer extends Component {



    render() {
        return (
            <div className="flex">
                {this.props.winners.map(winner => {
                    return `Congratulations, ${winner.username}, you won with ${winner.currentPoints} points!`
                })}
                <LeaderboardContainer />
            </div>
        )
    }
}