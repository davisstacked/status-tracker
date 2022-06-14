import React, { useState } from 'react';
import Status from './Status';

import './Status.css'

const StatusList = () => {

    const [statuses, setStatuses] = useState<any>();
  const renderStatuses = () => {
    return (
      <ul>
        <li className='Status-list' style={{ listStyleType: 'none' }}>
          {statuses.map((status) => (
            <Status
            //   className='single-Status'
            //   user={status.user}
            //   message={status.message}
            //   time={status.time}
            //   image={status.image}
            //   key={status.id}
            //   id={status.id}
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