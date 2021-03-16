import React, { Component } from 'react'
import UpdComp from './XHO';

export class XCk extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        };
    }
    
    updateClk=()=> {
        this.setState({count: this.state.count+1});
    }

    render() {
        const {count} = this.state;
        return (
            <div>
             <button onClick={this.updateClk}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdComp(XCk);
