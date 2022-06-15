import React, { useState } from 'react';
import RouteToPopper from './RouteToPopper';
import StatusPopper from './StatusPopper';
import {
  Stack,
  Button,
  ClickAwayListener
} from '@mui/material';
import { statusArray } from './StatusArray';

import './StatusTracker.css';

const StatusTrackerPage = () => {

  // Date + Two Days on form open
  const date = new Date();
  // add two days
  const initialDueDate = date.setDate(date.getDate() + 2);
  
  const dueDate = new Date(initialDueDate);

  const [user, setUser] = useState<any>({
      reviewedBy: "Mike Poland",
      currentlyWith: "Helder Melendez"
  });

  const [statuses, setStatuses] = useState<any>([...statusArray])

  const [routeTo, setRouteTo] = useState<any>({ 
    user: user.currentlyWith,
    dueDate: dueDate,
    routedTo: 'Finalized',
    comment: '',
    status: 'Doing'
  });

  console.log('statuses', statuses)

  return (

    <div className="Status-Tracker">
      <div className="Status-Tracker-container">
        <div className="grid-item">Status:</div>
        <div className="popper-row grid-item">
          <StatusPopper 
            statuses={statuses}
            setStatuses={setStatuses}
            user={user}
            setUser={setUser}
            routeTo={routeTo}
            setRouteTo={setRouteTo}
          />
          <RouteToPopper 
            dueDate={dueDate}
            user={user}
            setUser={setUser}
            statuses={statuses}
            setStatuses={setStatuses}
            routeTo={routeTo}
            setRouteTo={setRouteTo}
          />
        </div>
        <div className="grid-item">Reviewed By:</div>
        <div className="bold grid-item">@{user.reviewedBy}</div>
        <div className="grid-item">Currently With:</div>
        <div className="bold grid-item">@{user.currentlyWith}</div>
      </div>
    </div>
  
  )
}

export default StatusTrackerPage;
