import React, { useState } from 'react';
import Status from './Status';

import './StatusTracker.css';

const StatusList = ({statuses, setStatuses}) => {

  const renderStatuses = () => {
    return (
      <ul>
        <li className='Status-list' style={{ listStyleType: 'none' }}>
          {statuses.map((status) => (
            <Status
            statuses={statuses}
            setStatuses={setStatuses}
            user={status.user}
            dueDate={status.dueDate}
            routedTo={status.routedTo}
            comment={status.comment}
            status={status.status}
            />
          ))}
        </li>
      </ul>
    );
  };

  return (
    <div className='Statuslist'>
      {renderStatuses()}
    </div>
  );
};

export default StatusList;