import React, { useState } from 'react'
import Button from './Button'

const Calculator = () => {
  const [input, setInput] = useState('');


  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
        setInput(input.slice(0, -1));
      
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-red-800 rounded">
      <input
        type="text"
        value={input}
        className="w-full mb-4 p-2 text-gray-800 border border-yellow-500 rounded"
        readOnly
      />
      <div className="grid grid-cols-4 gap-2">
        <Button label="1" onClick={handleClick} />
        <Button label="2" onClick={handleClick} />
        <Button label="3" onClick={handleClick} />
        <Button label="+" onClick={handleClick} />
        <Button label="4" onClick={handleClick} />
        <Button label="5" onClick={handleClick} />
        <Button label="6" onClick={handleClick} />
        <Button label="-" onClick={handleClick} />
        <Button label="7" onClick={handleClick} />
        <Button label="8" onClick={handleClick} />
        <Button label="9" onClick={handleClick} />
        <Button label="*" onClick={handleClick} />
        <Button label="C" onClick={handleClick} />
        <Button label="0" onClick={handleClick} />
        <Button label="=" onClick={handleClick} />
        <Button label="/" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;