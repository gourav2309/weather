import React from 'react';

const SunriseSunsetComponent = ({ sunrise, sunset }) => {
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className='white icon bold margin10'>
      <div>
        Sunrise: {sunriseTime}
      </div>
      <div>
        Sunset: {sunsetTime}
      </div>
    </div>
  );
};

export default SunriseSunsetComponent;
