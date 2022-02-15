/** @format */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CalcPage from './pages/calculatorSection';
import HomePage from './pages/home';
import Quote from './pages/quote';
import NavBar from './components/navBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="calculator" element={<CalcPage />} />
            <Route path="quotes" element={<Quote />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
