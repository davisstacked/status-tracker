import React, { useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Calendar from './Calendar';
import classNames from 'classnames';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


import './StatusTracker.css';

const RouteToPopperForm = ({ user, setUser, handleClickAway, statuses, addStatus, setStatuses, dueDate, routeTo, setRouteTo }) => {

  // timeSubmitted will be added to state on submit
  // 

  const date = new Date();

  const handleChange = (e: any) => {
    setRouteTo((state: any) => ({ ...state, [e.target.name]: e.target.value }));
  };
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // addComment(comment);
    setUser((state) => ({...state, reviewedBy: routeTo.user, currentlyWith: routeTo.routedTo}));
    setRouteTo((state) => (
      {...state, 
        reviewedBy: routeTo.user, 
        user: routeTo.routedTo,
        dueDate: '06/23/2022 - 6:50 PM'
      }))
   
    addStatus();
    // setRouteTo({ 
    //   user: user.currentlyWith,
    //   reviewedBy: user.reviewedBy,
    //   dueDate: dueDate,
    //   routedTo: 'Finalized',
    //   comment: '',
    //   timeSubmitted: ''
    // });
    
    handleClickAway();
  };

  // const handleReject = (e: any) => {
  //   e.preventDefault();
  //   // addComment(comment);
  //   setUser((state) => ({...state, reviewedBy: routeTo.reviewedBy, currentlyWith: routeTo.routedTo}));
  //   setRouteTo((state) => ({...state, status: "Reject"}))
   
  //   // setRouteTo((state) => ({...state, status}))
  //   // addStatus(routeTo);
  //   // setRouteTo({ 
  //   //   user: user.currentlyWith,
  //   //   reviewedBy: user.reviewedBy,
  //   //   dueDate: dueDate,
  //   //   routedTo: 'Finalized',
  //   //   comment: '',
  //   //   timeSubmitted: ''
  //   // });
    
  //   handleClickAway();
  // };

  // const handleInquire = (e: any) => {
  //   e.preventDefault();
  //   // addComment(comment);
  //   setUser((state) => ({...state, reviewedBy: routeTo.reviewedBy, currentlyWith: routeTo.routedTo}));
  //   setRouteTo((state) => ({...state, status: "Inquire"}))
   
  //   // setRouteTo((state) => ({...state, status}))
  //   // addStatus(routeTo);
  //   // setRouteTo({ 
  //   //   user: user.currentlyWith,
  //   //   reviewedBy: user.reviewedBy,
  //   //   dueDate: dueDate,
  //   //   routedTo: 'Finalized',
  //   //   comment: '',
  //   //   timeSubmitted: ''
  //   // });
    
  //   handleClickAway();
  // };
  
  console.log('user', user);
  console.log('routeTo', routeTo);
  console.log('statuses', statuses)

  return (
    <div className="Route-To-Popper">
    <form className="Route-To-Popper-Form">
      <div className="Route-To-Popper-Grid">
        <div className="route-grid-item">Due Date:</div>
        <div className="route-to-item-container">
          <Calendar 
            setRouteTo={setRouteTo} 
            routeTo={routeTo}
            // handleDateChange={handleDateChange}
          />
        </div>
        <div className="route-grid-item">
          <label htmlFor="routedTo">Route To:</label>
        </div>
        <div className="route-grid-item route-to-item-container">
          <div className="custom-select">
            <select onChange={handleChange} className="route-select-dropdown route-to-item-container" id="routedTo" name="routedTo">
              <option className="select-items" value="Finalized">Finalized</option>
              <option className="select-items" value="IT Group">IT Group</option>
              <option className="select-items" value="Helder Melendez">Helder Melendez</option>
              <option className="select-items" value="Michael Polan">Michael Polan</option>
              <option className="select-items" value="Leah Davis">Leah Davis</option>
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
      <button onClick={handleSubmit} name="status" value="Approve" className="route-to-buttons approve-button" type='submit'>
        <div>
            <ThumbUpOffAltIcon />
        </div>
        <div>
          Approve
        </div>
        </button>
        <button onClick={handleSubmit} name="status" value="Reject" className="route-to-buttons reject-button" type='submit'>
            <div>
                <ThumbDownOffAltIcon />
            </div>
            <div>
                Reject
            </div>
        </button>
        <button onClick={handleSubmit} name="status" value="Inquire" className="route-to-buttons inquire-button" type='submit'>
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