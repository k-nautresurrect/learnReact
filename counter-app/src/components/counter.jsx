import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  // state is a property of Component which can store the information that is dynamic
  state = {
    value: this.props.value,
    tags: [],
  };

  // way 1 of binding
  /*  
  constructor() {
    super();
    // here we can access this so we will bind this to the new instance of method.
    // console.log(this);

    // binidng the handleIncrement
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  */

  render() {
    // console.log("props", this.props);
    // return can only return one element as createReactElement takes only one element at a time
    // we used bracket because javascript edits the return with ; if there is nothing
    // React.Fragment is used to return directly all the elements
    return (
      <div>
        {this.props.children}
        {/* {} <- are used to write javascript code in return */}
        <span className={this.getColor()}>{this.countShow()}</span>
        <button
          // but in passing refrence it will not work untill it is binded.
          //   onClick={this.handleIncrement}
          onClick={this.handleIncrement}
          className="btn btn-info btn-sm text-light"
        >
          {
            // when passing here will give this because function is called
            /* {this.handleIncrement()} */
          }
          Increment
        </button>
        {/* <h3>
          {this.state.tags.length === 0 && "Add Tags"}
          {this.state.tags.length > 0 && "The tags are"}
        </h3>
        <div>{this.renderTags()}</div> */}
      </div>
    );
  }
  /**
   * handleIncrement() {
   * // here this will give undefined because this method is called via obj.method
   * // console.log("Increment clicked", this);
   * // way 1 -> by binding
   * }
   */

  // way 2 -> using arrow function
  handleIncrement = () => {
    // we cannot do like this
    // it is changed in virtualDom
    // but react can't figure out how to sync it with real dom
    // this.state.value+1;

    // setState is used in this case
    this.setState({ value: this.state.value + 1 });
    this.setState({
      tags: this.state.tags.concat(`tag ${this.state.value + 1}`),
    });
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      console.log(this.state.tags);
      return <p>No tags are in here</p>;
    }
    return (
      <ul className="list-group">
        {this.state.tags.map((tags) => (
          <li className="list-group-item" key={tags}>
            {tags}
          </li>
        ))}
      </ul>
    );
  }

  getColor() {
    let classes = "badge m-2 bg-";
    classes += this.state.value === 0 ? "warning text-dark" : "primary";
    return classes;
  }

  countShow() {
    const { value } = this.state;
    return value;
  }
}

export default Counter;
