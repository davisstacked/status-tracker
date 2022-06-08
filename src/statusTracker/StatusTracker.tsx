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
        <div className="popper-and-status-container">
        <div>Status:</div>
        <Stack className="popper-container"spacing={1} direction="row" justifyContent="center">
          <StatusPopper />
          <RouteToPopper />
        </Stack>
        </div>
      </div>
    </div>
  )
}

export default StatusTrackerPage;