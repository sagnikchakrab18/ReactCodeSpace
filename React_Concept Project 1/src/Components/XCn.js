import React, { Component } from 'react'
import UpdComp from './XHO'

export class XCn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        };
    }
    IncCount=()=>{
        this.setState({count: this.state.count+1});
    }
    
    render() {
        const {count} = this.state;
        return (
            <div>
              <button onMouseEnter={this.IncCount}>{this.props.name} Hovered {count} times</button>
            </div>
        )
    }
}

export default UpdComp(XCn);
