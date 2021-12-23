import React, { Component } from "react";

class Counter extends Component{

    // state is a property of Component which can store the information that is dynamic
    state = {
        count: 2,
    }

    render () {
        // return can only return one element as createReactElement takes only one element at a time
        // we used bracket because javascript edits the return with ; if there is nothing
        // React.Fragment is used to return directly all the elements
        return (
            <React.Fragment>
                <h1>The Division is returned to root</h1>
                {/* {} <- are used to write javascript code in return */}
                <span>{this.countShow()}</span>
                <button> Increment </button>
            </React.Fragment>
        );
    }

    countShow() {
        const {count} = this.state;
        return <h1>{count}</h1>;
    }
}

export default Counter;