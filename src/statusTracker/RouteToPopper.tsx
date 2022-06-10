import React, { useState } from 'react';
import {
  Button,
  Box,
  Popper,
  ClickAwayListener
} from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Calendar from './Calendar';

import './StatusTracker.css';

const RouteToPopper = () => {

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
      <div>
        <button className="route-to-button status-button-container" onClick={handleClick}>
        {/* <div className="status-button-container"> */}
              <div><SendOutlinedIcon sx={{fontSize: "12px"}} /></div>
              <div>Route To</div>
            {/* </div> */}
        </button>
        <Popper placement="bottom-start" id={id} open={open} anchorEl={anchorEl}>
          <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
            <div className="Route-To-Popper-Form">
              <form className="Route-To-Popper-Container">
                <div className="grid-item">Due Date:</div>
                <div className="Calendar-wrapper grid-item">
                  <Calendar />
                </div>
                <div className="grid-item">Route To:</div>
                <div className="grid-item">dropdown menu</div>
              </form>
            </div>
          </Box>
        </Popper>
      </div>
    </ClickAwayListener>
  )
};

export default RouteToPopper;