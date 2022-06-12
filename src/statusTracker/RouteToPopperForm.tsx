import React, { useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Calendar from './Calendar';
import classNames from 'classnames';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


import './StatusTracker.css';

const RouteToPopperForm = () => {
// For all of state
  const [RouteTos, setRouteTos] = useState([]);

  const [routeTo, setRouteTo] = useState<any>({ 
    dueDate: '',
    comment: '',
    routeTo: '',
  });

  const addRouteTo = (routeTo: any) => {
    // const newComment = {
    //   ...comment,
    //   id: uuid(),
    //   time: moment().format(),
    // };
    // setRouteTos((state) => [...state, newRouteTo]);
  };

  const handleSubmit = (e: any) => {
    // e.preventDefault();
    // addComment(comment);
    setRouteTo({ 
      dueDate: '',
      routeTo: '',
      comment: '' 
    });
  };

  const handleChange = (e: any) => {
    setRouteTo((state: any) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleDateChange = (newValue) => {
    setRouteTo((state: any) => ({ ...state, newValue}))
  }

  return (
    <div className="Route-To-Popper">
    <form className="Route-To-Popper-Form">
      <div className="Route-To-Popper-Grid">
        <div className="route-grid-item">Due Date:</div>
        <div className="route-to-item-container">
          <Calendar 
            // setRouteTo={setRouteTo} 
            // routeTo={routeTo}
            // handleDateChange={handleDateChange}
          />
        </div>
        <div className="route-grid-item">
          <label htmlFor="routeTo">Route To:</label>
        </div>
        <div className="route-grid-item route-to-item-container">
          <div className="custom-select">
            <select className="route-select-dropdown route-to-item-container" id="routeTo" name="routeTo">
              <option value="Finalized">Finalized</option>
              <option value="IT Group">IT Group</option>
              <option value="Helder Mendez">Helder Melendez</option>
              <option value="Michael Polan">Michael Polan</option>
              <option value="Leah Davis">Leah Davis</option>
            </select>
          </div>
        </div>
      </div>
      <div>Comments:</div>
      <div className="textarea-wrapper">
        <textarea 
            className="textarea"
            placeholder='Textarea placeholder'
            onChange={handleChange}
            name='comment'
            value={routeTo.comment}
        />
      </div>
      <div className="route-to-button-container">
      <button className="route-to-buttons approve-button" type='submit'>
        <div>
            <ThumbUpOffAltIcon />
        </div>
        <div>
          Approve
        </div>
        </button>
        <button className="route-to-buttons reject-button" type='submit'>
            <div>
                <ThumbDownOffAltIcon />
            </div>
            <div>
                Reject
            </div>
        </button>
        <button className="route-to-buttons inquire-button" type='submit'>
            <div>
                <QuestionMarkIcon />
            </div>
            <div>
                Inquire
            </div>
        </button>
      </div>
    </form>
  </div>
  )
}

export default RouteToPopperForm