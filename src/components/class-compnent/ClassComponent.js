import React, { Component } from "react";

export class ClassComponent extends Component {
  componentDidMount() {
    console.log("This will run when the component is displayed");
  }

  componentDidUpdate() {
    console.log("This will run when the component is updated");
    console.log(this.props.theme);
  }

  componentWillUnmount() {
    console.log("This will run when the component is removed");
  }

  render() {
    return (
      <div>
        <h1>This is a class component</h1>
      </div>
    );
  }
}
