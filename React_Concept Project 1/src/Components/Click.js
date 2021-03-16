import React, { Component } from 'react'
import './Click.css';
import UpdatedComp from './HigherOrder';

export class Click extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            };
        }
        
        updateClick=()=> {
            this.setState({count: this.state.count+1});
        }

        render() {
            const { count } = this.state;            
        return (
            <div class="buttons">
            <button class="myButton action_btn" onClick={this.updateClick}>{this.props.name} Clicked {count} times on {this.props.date}</button>
            </div>
        )
    }
}

export default UpdatedComp(Click) 
