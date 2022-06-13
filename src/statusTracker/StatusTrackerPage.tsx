import React, { useState } from 'react';
import RouteToPopper from './RouteToPopper';
import StatusPopper from './StatusPopper';
import {
  Stack,
  Button,
  ClickAwayListener
} from '@mui/material';

import './StatusTracker.css';

const StatusTrackerPage = () => {

  const [user, setUser] = useState<any>({
    reviewedBy: "Mike Poland",
    currentlyWith: "Helder Melendez"
  }
)

  return (

    <div className="Status-Tracker">
      <div className="Status-Tracker-container">
        <div className="grid-item">Status:</div>
        <div className="popper-row grid-item">
          <StatusPopper />
          <RouteToPopper 
            user={user}
            setUser={setUser}
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
