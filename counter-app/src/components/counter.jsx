import React, { Component } from "react";

class Counter extends Component{

    
    render () {
        // return can only return one element as createReactElement takes only one element at a time
        // we used bracket because javascript edits the return with ; if there is nothing
        // React.Fragment is used to return directly all the elements
        return (
            <React.Fragment>
                <h1>The Division is returned to root</h1>
                <button> Increment </button>
            </React.Fragment>
        );
    }
}

export default Counter;