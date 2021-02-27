import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [item, setItem] = useState(1);
  const increment = () => setItem(item + 1);
  const decrement = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

class Appbad extends React.Component {
  state = {
    item: 1,
  };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }

  increment = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };

  decrement = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };
}

export default Appbad;
