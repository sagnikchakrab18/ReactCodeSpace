import React, { Component } from 'react'
import PC from './PureComp'
import RC from './RegularComp'


export class XParCmp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Didi"
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({name: "Didi2"}) 
        }, 3000);
    }
    
    render() {
        const {name} = this.state;
        console.log("XPar comp rendered")
        return (
            <div>
                <p>Parent Component Practicing & render checking</p>
                <PC name={name}/>
                <RC name={name}/>                
            </div>
        )
    }
}

export default XParCmp
