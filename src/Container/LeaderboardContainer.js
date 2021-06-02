import React, { Component } from "react"
import LeaderboardItem from "../Component/LeaderboardItem"

export default class LeaderboardContainer extends Component {
    
    constructor() {
        super()
        this.state = {
            leaderboard: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:9292/leaderboard")
            .then(res => res.json())
            .then(leaderboardArray => this.setState({
                leaderboard: leaderboardArray
            }))
    }

    render() {
        return (
            <div>
                {this.state.leaderboard.map(player => <LeaderboardItem player={player} />)}
            </div>
        )
    }
}