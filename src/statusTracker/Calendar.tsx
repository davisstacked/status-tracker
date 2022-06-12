import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default function Calendar() {

//you can access the value field in handleChange by e.target.value

const [value, setValue] = React.useState<Date | null>(null
);

// handleChange(value, e) {
//     console.log(value); // this will be a moment date object
//     console.log(e.target.value); // this will be a string value in datepicker input field
// }


console.log('value', value)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="Rout-to-item-container grid-item">
        <DatePicker
          label="Select time"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />
        }
        />
      </div>
    </LocalizationProvider>
  );
}
