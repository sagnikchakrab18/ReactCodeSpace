import React, { Component } from 'react'
import PureComp from './PureComp.js'
import RegularComp from './RegularComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
          name: "Narod Narod"  
        };
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Narod Narod"
            })
        }, 3000);
    }

    render() {
        console.log("Parent Component Rendered")
        return (
        <div>This is Parent Component 
            <RegularComp name={this.state.name} />
            <PureComp name={this.state.name} />
        </div>
        )
    }
}

export default ParentComp
