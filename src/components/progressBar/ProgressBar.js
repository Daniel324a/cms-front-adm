import React, { useState } from 'react';

export const ProgressBar = ({ percent = 10 }) => {
  const [percentState, setPercentState] = useState(percent);

  return (
    <div className='progress progress-xs margin-vertical-10 '>
      <div
        className='progress-bar bg-success'
        style={{ width: `${percentState}%` }}
      ></div>
    </div>
  );
};
