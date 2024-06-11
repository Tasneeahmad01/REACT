import React, { useState } from 'react';

export const Increase = () => {
  const [num, setNum] = useState(5);

  const incNum = () => {
    setNum(prevNum => prevNum + 1);
  };

  const decNum = () => {
    setNum(prevNum => prevNum - 1);
  };

  return (
    <div className='main_div'>
      <div className="center_div">
        <h1>{num}</h1>
        <div className="btn_div">
          <button onClick={incNum}>Increase</button>
          <button onClick={decNum}>Decrease</button>
        </div>
      </div>
    </div>
  );
}
