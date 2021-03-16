import React, { Component } from 'react'
import UpdatedComp from './HigherOrder'

    
export class Counter extends Component {
    constructor(props) {
        super(props)
    
        // var today = new Counter(),
        //date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


        this.state = {
            count: 0,
            currentDateTime: ''
        };
    }

    incrementCounter =()=> {
        this.setState({count: this.state.count + 1, currentDateTime: Date().toLocaleString()})
    }


    render() {
        const { count } = this.state;
        return (
            <div class="buttons">
    <button class="myButton action_btn" onMouseEnter={this.incrementCounter}>{this.props.name} Incremented {count} times on {this.state.currentDateTime}</button>
            </div>
        )
    }
}

export default UpdatedComp(Counter) 
