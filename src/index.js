import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = { phoneInput: '' };
    this.validateNumericInput = this.validateNumericInput.bind(this);
  }

  validateNumericInput(e) {
    const onlyNumsRegex = /^[0-9\b]+$/;
    if (e.target.value === '' || onlyNumsRegex.test(e.target.value)) {
      this.setState({ phoneInput: e.target.value });
    }
  }

  render() {
    return (
      <div>
        <span>Phone : </span>
        <input
          value={this.state.phoneInput}
          onChange={this.validateNumericInput}
        />
        <br />
        <br />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
