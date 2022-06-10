import React from 'react';
import RouteToPopper from './RouteToPopper';
import StatusPopper from './StatusPopper';
import {
  Stack,
  Button,
  ClickAwayListener
} from '@mui/material';

import './StatusTracker.css';

const StatusTrackerPage = () => {
  return (
    <div className="Status-Tracker">
      <div className="Status-Tracker-container">
        <div className="grid-item">Status:</div>
        <div className="popper-row grid-item">
          <StatusPopper />
          <RouteToPopper />
        </div>
        <div className="grid-item">Reviewed By:</div>
        <div className="bold grid-item">@Mike Poland</div>
        <div className="grid-item">Currently With:</div>
        <div className="bold grid-item">@Helder Melendez</div>
      </div>
    </div>
  
  )
}

export default StatusTrackerPage;
