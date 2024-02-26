// ScoreCard.js
import React from 'react';

const ScoreCard = ({ name, score }) => {
  return (
    <div className="bg-white rounded shadow-sm p-6 max-w-l m-5 ">
      <p className="text-l font-semibold mb-2 px-4 w-full text-left">{name}</p>
      <p className="text-xs text-gray-500 px-4 w-full text-left">{`Score: ${score}`}</p>
    </div>
  );
};

export default ScoreCard;
