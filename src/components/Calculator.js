import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const useOps = (initial) => {
  const [ops, setOps] = useState(initial);

  const handleClick = (e) => {
    setOps(calculate(ops, e.target.textContent));
  };

  return { ops, handleClick };
};

const Calculator = () => {
  const { ops, handleClick } = useOps({
    total: null,
    next: null,
    operation: null,
  });

  const { total, next, operation } = ops;
  return (
    <div className="calc-container">
      <p className="result-display">
        {total !== null ? total : ''}
        {operation !== null ? operation : ''}
        {next !== null ? next : ''}
      </p>
      <div className="keys-container">
        <button className="grey" type="button" onClick={handleClick}>
          AC
        </button>
        <button className="grey" type="button" onClick={handleClick}>
          +/-
        </button>
        <button className="grey" type="button" onClick={handleClick}>
          %
        </button>
        <button className="orange" type="button" onClick={handleClick}>
          ÷
        </button>
        <button className="grey" type="button" onClick={handleClick}>
          7
        </button>
        <button className="grey" type="button" onClick={handleClick}>
          8
        </button>
        <button className="grey" type="button" onClick={handleClick}>
          9
        </button>
        <button className="orange" type="button" onClick={handleClick}>
          x
        </button>
        <button className="grey" type="button" onClick={handleClick}>
          5
        </button>
        <button className="grey" type="button" onClick={handleClick}>
          6
        </button>
        <button className="grey" type="button" onClick={handleClick}>
          7
        </button>
        <button className="orange" type="button" onClick={handleClick}>
          -
        </button>
        <button className="grey" type="button" onClick={handleClick}>
          1
        </button>
        <button className="grey" type="button" onClick={handleClick}>
          2
        </button>
        <button className="grey" type="button" onClick={handleClick}>
          3
        </button>
        <button className="orange" type="button" onClick={handleClick}>
          +
        </button>
        <button className="bigger" type="button" onClick={handleClick}>
          0
        </button>
        <button className="grey" type="button" onClick={handleClick}>
          .
        </button>
        <button className="orange" type="button" onClick={handleClick}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
