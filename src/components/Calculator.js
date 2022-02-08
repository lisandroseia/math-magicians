import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-container">
        <p className="result-display">0</p>
        <div className="keys-container">
          <button className="grey" type="button">
            AC
          </button>
          <button className="grey" type="button">
            +/-
          </button>
          <button className="grey" type="button">
            %
          </button>
          <button className="orange" type="button">
            ÷
          </button>
          <button className="grey" type="button">
            7
          </button>
          <button className="grey" type="button">
            8
          </button>
          <button className="grey" type="button">
            9
          </button>
          <button className="orange" type="button">
            x
          </button>
          <button className="grey" type="button">
            5
          </button>
          <button className="grey" type="button">
            6
          </button>
          <button className="grey" type="button">
            7
          </button>
          <button className="orange" type="button">
            -
          </button>
          <button className="grey" type="button">
            1
          </button>
          <button className="grey" type="button">
            2
          </button>
          <button className="grey" type="button">
            3
          </button>
          <button className="orange" type="button">
            +
          </button>
          <button className="bigger grey" type="button">
            0
          </button>
          <button className="grey" type="button">
            .
          </button>
          <button className="orange" type="button">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
