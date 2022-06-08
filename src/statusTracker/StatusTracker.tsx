import React from 'react';
import RouteToPopper from './RouteToPopper';
import StatusPopper from './StatusPopper';
import {
  Stack,
  Button
} from '@mui/material';

const StatusTrackerPage = () => {
  return (
    <div>
        <div>StatusTrackerPage</div>
        <Stack spacing={2} direction="row" justifyContent="center">
        <Button variant="outlined">Doing</Button>
        <Button variant="outlined">Route To</Button>
        </Stack>
        <RouteToPopper />
        <StatusPopper />
    </div>
  )
}

export default StatusTrackerPage;