import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      className="bg-green-500 text-gray-800 font-semibold py-2 px-4 rounded"
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

export default Button;
