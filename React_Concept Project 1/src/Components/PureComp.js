import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log("Pure Component Rendered")
        return (
        <div>This is Pure Component {this.props.name}</div>
        )
    }
}

export default PureComp
