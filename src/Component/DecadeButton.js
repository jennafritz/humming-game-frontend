import React, { Component } from "react"

export default class DecadeButton extends Component {
    
    // chooseDecade = () => {
    // fetch(`http://localhost:9292/decades?year=${this.props.value}`) 
    //   .then(res => res.json())
    //   .then(result => {
    //     console.log(this.props.value)
    //    console.log(result)
    //   })
    // }

    render() {
        return (
            <div>
                <button onClick={() => this.props.chooseDecade(this.props.value)}>{this.props.name}</button>
            </div>
        )
    }
}