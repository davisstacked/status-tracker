import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default function Calendar({setRouteTo, routeTo}) {

//you can access the value field in handleChange by e.target.value

const date = new Date();
// add two days
const initialDueDate = date.setDate(date.getDate() + 2);

const dueDate = new Date(initialDueDate);

const [value, setValue] = React.useState<any>(dueDate);
// const [selectedDate, handleDateChange] = useState(new Date());

// handleChange(value, e) {
//     console.log(value); // this will be a moment date object
//     console.log(e.target.value); // this will be a string value in datepicker input field
// }

console.log('value', value)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="Rout-to-item-container grid-item">
        <DatePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            setRouteTo((state) => ({...state, dueDate: value}))
          }}
          renderInput={(params) => <TextField className="text" size="small" sx={{fontFamily: "Prelo", fontSize: "14px"}} {...params} />
        }
        />
      </div>
    </LocalizationProvider>
  );
}
