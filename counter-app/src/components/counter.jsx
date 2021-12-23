import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'

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
            <div>
                {/* {} <- are used to write javascript code in return */}
                <span className="badge bg-primary m-2">{this.countShow()}</span>
                <button className="btn btn-success btn-sm"> Increment </button>
            </div>
        );
    }

    countShow() {
        const {count} = this.state;
        return count;
    }
}

export default Counter;