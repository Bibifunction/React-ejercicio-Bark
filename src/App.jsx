import React, { useState } from 'react';
import './App.css';

export const App = () => {
  const [barkCount, setBarkCount] = useState(0);

  const handleBark = () => {
    setBarkCount(barkCount + 1);
  };

  return (
    <div>
      <p>Woofs: {barkCount}</p>
      <button onClick={handleBark}>Bark!</button>
    </div>
  );
};
