import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'

class Counter extends Component{

    // state is a property of Component which can store the information that is dynamic
    state = {
        count: 0,
        tags: ["tag1","tag2","tag3"],
    }
    
    render () {
        // return can only return one element as createReactElement takes only one element at a time
        // we used bracket because javascript edits the return with ; if there is nothing
        // React.Fragment is used to return directly all the elements
        return (
            <div>
                {/* {} <- are used to write javascript code in return */}
                <span className={this.getColor()}>{this.countShow()}</span>
                <button className="btn btn-info btn-sm text-light"> Increment </button>
                <ul className="list-group">
                    {this.state.tags.map(tags => <li className="list-group-item" key={tags}>{tags}</li>)}
                </ul>
            </div>
        );
    }


    getColor(){
        let classes = "badge m-2 bg-"
        classes += this.state.count === 0 ? "warning text-dark" : "primary";
        return classes;
    }

    countShow() {
        const {count} = this.state;
        return count;
    }
}

export default Counter;