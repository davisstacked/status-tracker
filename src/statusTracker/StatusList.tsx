import React, { useState } from 'react';
import Status from './Status';
import SyncIcon from '@mui/icons-material/Sync';

import './StatusTracker.css';

const StatusList = ({ statuses, setStatuses, handleClick, user, setUser, routeTo, setRouteTo }) => {

  const renderStatuses = () => {
    return (
      <div className="review-status-grid">
        {/* The doing button line */}
        <div className="review-status-grid-item">    
        <button 
          className="review-status-grid-item review-status-buttons doingbutton2"
          type='submit'
        >
            <div><SyncIcon  /></div>
            <div>
              Doing
            </div>
        </button>
      <div>{routeTo.user}</div>
      <div className="twelvepx">{routeTo.dueDate}</div>
      </div>
          {statuses.map((status) => (
              <Status
                reviewedBy={status.reviewedBy}
                timeSubmitted={status.timeSubmitted}
                statuses={statuses}
                setStatuses={setStatuses}
                user={status.user}
                dueDate={status.dueDate}
                routedTo={status.routedTo}
                comment={status.comment}
                status={status.status}
                handleClick={handleClick}
              />
            ))}
      </div>
    );
  };

  return (
    <div className='Statuslist'>
      {renderStatuses()}
    </div>
  );
};

export default StatusList;