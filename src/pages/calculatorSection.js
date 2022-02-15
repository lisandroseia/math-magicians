import React from 'react';
import Calculator from '../components/Calculator';
import './calcPage.css';

const CalcPage = () => (
  <div className="calcPage">
    <p className="calcText">Let&apos;s do some math</p>
    <Calculator />
  </div>
);

export default CalcPage;
