import React, { Component } from "react";

class Counter extends Component{
    render () {
        // we used bracket because javascript edits the return with ; if there is nothing
        return (
            <div>
                <h1>The Division is returned to root</h1>
                <button> Increment </button>
            </div>
        );
    }
}

export default Counter;