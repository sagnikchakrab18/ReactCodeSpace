import React, { Component } from 'react'

export class RegularComp extends Component {
    render() {
        console.log("Regular Component Rendered")
        return (
        <div>This is Regular Component {this.props.name}</div>
        )
    }
}

export default RegularComp
