import React from 'react';

function Rankedcard({ rank, name, numHikesVisited, userPoints }) {
  return (
    <div className="rounded-lg overflow-hidden bg-purple-200 border border-green-300 p-6 hover:shadow-lg transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-4">{rank}</h3>
      <p className="text-gray-700 text-sm mb-2">{name}</p>
      <p className="text-gray-700 text-sm mb-2">{numHikesVisited}</p>
      <p className="text-gray-700 text-sm">{userPoints}</p>
    </div>
  );
}

export default Rankedcard;