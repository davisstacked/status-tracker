import React, { useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Calendar from './Calendar';
import classNames from 'classnames';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


import './StatusTracker.css';

const RouteToPopperForm = () => {

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({ message: '' });

  const addComment = (comment: any) => {
    // const newComment = {
    //   ...comment,
    //   id: uuid(),
    //   time: moment().format(),
    // };
    // setComments((state) => [...state, newComment]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addComment(comment);
    setComment({ message: '' });
  };

  const handleChange = (e: any) => {
    setComment((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <div className="Route-To-Popper">
    <form className="Route-To-Popper-Form">
      <div className="Route-To-Popper-Grid">
        <div className="route-grid-item">Due Date:</div>
        <div className="route-to-item-container">
          <Calendar />
        </div>
        <div className="route-grid-item">
          <label htmlFor="route-to">Route To:</label>
        </div>
        <div className="route-grid-item route-to-item-container">
          <div className="custom-select">
            <select className="route-select-dropdown" Route-to-item-container id="route-to" name="route">
              <option value="Finalized">Finalized</option>
              <option value="IT Group">IT Group</option>
              <option value="Helder Mendez">Helder Mendez</option>
              <option value="Michael Polan">Michael Polan</option>
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
            name='message'
            value={comment.message}
        />
      </div>
      <div className="route-to-button-container">
      <button className="route-to-button approve-button" type='submit'>
        <div>
            <ThumbUpOffAltIcon />
        </div>
        <div>
          Approve
        </div>
        </button>
        <button className="route-to-button reject-button" type='submit'>
            <div>
                <ThumbDownOffAltIcon />
            </div>
            <div>
                Reject
            </div>
        </button>
        <button className="route-to-button inquire-button" type='submit'>
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