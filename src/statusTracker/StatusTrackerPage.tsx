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
    user: "Helder Melendez",
    reviewedBy: "Michael Polan",
    dueDate: '04/11/2022 - 5:00 PM',
    routedTo: 'Finalized',
    comment: '',
    status: '',
    timeSubmitted: ''
  });

  const addStatus = () => {
    const newStatus = {
      user: "Leah Davis",
      reviewedBy: "Michael Polan",
      dueDate: '04/30/2022 - 4:20 PM',
      routedTo: 'Finalized',
      comment: 'Awesome',
      status: 'Approve',
      timeSubmitted: '04/30/2022 - 4:20 PM'
    };
    setStatuses((state) => [{ ...newStatus}, ...state]);
  };

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
            addStatus={addStatus}
          />
        </div>
        <div className="grid-item">Reviewed By:</div>
        <div className="bold grid-item">@{routeTo.reviewedBy}</div>
        <div className="grid-item">Currently With:</div>
        <div className="bold grid-item">@{routeTo.user}</div>
      </div>
    </div>
  
  )
}

export default StatusTrackerPage;
