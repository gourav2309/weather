import React from 'react';
import { format } from 'date-fns';

const DateDisplay = () => {
  const dateString = "1686722400"; // Unix timestamp in seconds
  const date = new Date(Number(dateString) * 1000); // Convert to milliseconds
  const formattedDate = format(date, "EEEE MMM d, yyyy, hh:mm a");

  return (
    <div className='padding20'>
      {formattedDate}
    </div>
  );
}

export default DateDisplay;
