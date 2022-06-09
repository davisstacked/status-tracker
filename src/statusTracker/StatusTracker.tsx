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
        <div className="row">
          <div className="Status-Tracker-grid-item-1">Status:</div>
        <div className="popper-row">
          <StatusPopper />
          <RouteToPopper />
        </div>
        </div>
        <div className="row">
          <div>Reviewed By:</div>
          <div>@Mike Poland</div>
        </div>
        <div className="row">
          <div>Currently With:</div>
          <div>@Helder Melendez</div>
        </div>
      </div>
    </div>
  )
}

export default StatusTrackerPage;