import React from "react";
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.clickedButton = this.clickedButton.bind(this);
  }
  // methods life cycle

  componentDidMount() {
    console.log("mounted!");
  }

  componentDidUpdate() {
    console.log("Updated!"); //it shows what ever changes did made on the page
  }

  componentWillUnmount() {
    console.log("clean up!!!"); //like unsubscribe
  }

  clickedButton() {
    this.setState({ count: this.state.count + 1 });
    this.props.destroy(false);
  }
  render() {
    return (
      <div>
        <p>Clicked:{this.state.count}</p>
        <button className="btn btn-success" onClick={this.clickedButton}>
          Click me
        </button>
      </div>
    );
  }
}

export default Test;
