import React from "react";
import '../App.css'

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    updateState() {
        this.setState({
            counter: this.state.count++
        })
    }
    undoState() {
        this.setState({
            counter: this.state.count--
        })
    }
    resetState() {
        this.setState({
            count: 0
        })
    }
    render() {
        return (
            <div className="counter">
                <h1>Counter: {this.state.count}</h1>
                <button className="add" onClick={() => { this.updateState() }}>Add</button>
                <button className="reset" onClick={() => { this.resetState() }}>Reset</button>
                <button className="sub" onClick={() => { this.undoState() }}>Sub</button>
            </div>
        )
    }
}