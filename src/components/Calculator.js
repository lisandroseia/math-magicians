import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calc-container">
        <p className="result-display">
          {total !== null ? total : ''}
          {operation !== null ? operation : ''}
          {next !== null ? next : ''}
        </p>
        <div className="keys-container">
          <button className="grey" type="button" onClick={this.handleClick}>
            AC
          </button>
          <button className="grey" type="button" onClick={this.handleClick}>
            +/-
          </button>
          <button className="grey" type="button" onClick={this.handleClick}>
            %
          </button>
          <button className="orange" type="button" onClick={this.handleClick}>
            ÷
          </button>
          <button className="grey" type="button" onClick={this.handleClick}>
            7
          </button>
          <button className="grey" type="button" onClick={this.handleClick}>
            8
          </button>
          <button className="grey" type="button" onClick={this.handleClick}>
            9
          </button>
          <button className="orange" type="button" onClick={this.handleClick}>
            x
          </button>
          <button className="grey" type="button" onClick={this.handleClick}>
            5
          </button>
          <button className="grey" type="button" onClick={this.handleClick}>
            6
          </button>
          <button className="grey" type="button" onClick={this.handleClick}>
            7
          </button>
          <button className="orange" type="button" onClick={this.handleClick}>
            -
          </button>
          <button className="grey" type="button" onClick={this.handleClick}>
            1
          </button>
          <button className="grey" type="button" onClick={this.handleClick}>
            2
          </button>
          <button className="grey" type="button" onClick={this.handleClick}>
            3
          </button>
          <button className="orange" type="button" onClick={this.handleClick}>
            +
          </button>
          <button className="bigger" type="button" onClick={this.handleClick}>
            0
          </button>
          <button className="grey" type="button" onClick={this.handleClick}>
            .
          </button>
          <button className="orange" type="button" onClick={this.handleClick}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
