import React, { Component } from "react"

export default class SongOption extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.song.title}</h2>
                <h3>{this.props.song.artist}</h3>
                <h4>{this.props.song.year}</h4>
            </div>
        )
    }
}