import React from 'react';
import RouteToPopper from './RouteToPopper';
import StatusPopper from './StatusPopper';
import {
  Stack,
  Button,
  ClickAwayListener
} from '@mui/material';

const StatusTrackerPage = () => {
  return (
    <div>
        <Stack spacing={1} direction="row" justifyContent="center">
          <StatusPopper />
          <RouteToPopper />
        </Stack>
    </div>
  )
}

export default StatusTrackerPage;