import React from 'react';
import Calculator from './Components/Calculator';
import './index.css';
import './App.css';



const App = () => {
  return (
    <div className="App h-screen flex justify-center items-center bg-gray-200">
      <Calculator/>
    </div>
  );
};

export default App;
