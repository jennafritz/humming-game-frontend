import React, { Component } from "react"
import DecadeButton from "../Component/DecadeButton"

export default class DecadeButtonsContainer extends Component {
    render() {
        return (
            <div>
                <DecadeButton name="50s" value={1950} chooseDecade={this.props.chooseDecade}/>
                <DecadeButton name="60s" value={1960} chooseDecade={this.props.chooseDecade}/>
                <DecadeButton name="70s" value={1970} chooseDecade={this.props.chooseDecade}/>
                <DecadeButton name="80s" value={1980} chooseDecade={this.props.chooseDecade}/>
                <DecadeButton name="90s" value={1990} chooseDecade={this.props.chooseDecade}/>
                <DecadeButton name="00s" value={2000} chooseDecade={this.props.chooseDecade}/>
                <DecadeButton name="10s" value={2010} chooseDecade={this.props.chooseDecade}/>
                <DecadeButton name="20s" value={2020} chooseDecade={this.props.chooseDecade}/>
            </div>
        )
    }
}