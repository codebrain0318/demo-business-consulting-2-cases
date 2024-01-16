'use client'

import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
// import './styles.css';

interface SensorCallbackArg {
    isVisible: boolean;
  }

export default function CounterUp(
    {countTo} : 
    {countTo : number}
) {
  return (
    <div className="">
      <div className="content" />
      <VisibilitySensor  partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible} : SensorCallbackArg) => (
          <div  style={{ height: '56px' }}>
            {isVisible ? <CountUp end={countTo} /> : null}
          </div>
        )}
      </VisibilitySensor>
    </div>
  );
}