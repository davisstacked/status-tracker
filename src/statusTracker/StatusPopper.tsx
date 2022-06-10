import React, { useState } from 'react';
import {
  Button,
  Box,
  Popper,
  ClickAwayListener
} from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync';

import './StatusTracker.css';

const StatusPopper = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const id = open ? 'simple-popper' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log('event', event.currentTarget);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  return (
      <ClickAwayListener onClickAway={handleClickAway}>
      <div className="status-button-container">
        <button 
          className="doing-button" 
          onClick={handleClick}>
            <div><SyncIcon sx={{fontSize: "12px"}} /></div>
            <div>Doing</div>
        </button>
        <Popper 
          placement="bottom-start" 
          id={id} 
          open={open} 
          anchorEl={anchorEl}
        >
          <Box>
            <div className="Status-Popper">
              <form action=""></form>
            </div>
          </Box>
        </Popper>
      </div>

      </ClickAwayListener>
  )
}

export default StatusPopper;