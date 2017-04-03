import React, { Component } from 'react';

// Stateful component.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      counter: 0
    };
    this.holaLiz = this.holaLiz.bind(this);
  }
  holaLiz(event) {
    this.setState({
      counter: ++this.state.counter
    });
  }
  render() {
    return (
      <div onClick={this.holaLiz}>
        {`Hola Mundo ${this.state.name} ${this.state.counter}`}
      </div>
    )
  }
}

export default App;
