import React, { Component } from "react"

export default class TurnForm extends Component {
    constructor() {
        super()
        this.state = {
            numTurns: 0
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    this.props.setTurns(this.state.numTurns)
                    this.props.history.push("/gamesetup")
                    this.props.createUserGames()
                }}>
                    <label >
                        <input onChange={(event) => { this.setState({ numTurns: event.target.value }) }} type="text" name="numTurns" value={this.state.numTurns} />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}