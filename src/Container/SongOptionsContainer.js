import React, { Component } from "react"
import SongOption from "../Component/SongOption"

export default class SongOptionsContainer extends Component {
    render() {
        return (
            <div className="flex">
                {this.props.currentSongs.map(song => <SongOption song={song} />)}
            </div>
        )
    }
}