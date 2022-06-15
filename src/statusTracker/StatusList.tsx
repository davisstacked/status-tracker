import React, { useState } from 'react';
import Status from './Status';

import './StatusTracker.css';

const StatusList = ({ statuses, setStatuses, handleClick }) => {

  const renderStatuses = () => {
    return (
      <div className="review-status-grid">
          {statuses.map((status) => (
              <Status
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