import '../css/App.css';
import React from 'react';
import Balance from "./Balance"
import Chart from './Chart';

function App() {
  return (
    <div id="container">
      <main>
        <Balance />
        <Chart />
      </main>
    </div>
  );
}

export default App;
