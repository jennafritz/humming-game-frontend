import React, { Component } from "react"
import DecadeButton from "../Component/DecadeButton"

export default class DecadeButtonsContainer extends Component {
    render() {
        return (
            <div>
                DecadeButtonsContainer Container
                <DecadeButton name="50s" value={1950}/>
                <DecadeButton name="60s" value={1960}/>
                <DecadeButton name="70s" value={1970}/>
                <DecadeButton name="80s" value={1980}/>
                <DecadeButton name="90s" value={1990}/>
                <DecadeButton name="00s" value={2000}/>
                <DecadeButton name="10s" value={2010}/>
                <DecadeButton name="20s" value={2020}/>
            </div>
        )
    }
}