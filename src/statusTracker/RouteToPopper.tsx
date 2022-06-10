import React, { useState } from 'react';
import {
  Button,
  Box,
  Popper,
  ClickAwayListener
} from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Calendar from './Calendar';
import RouteToPopperForm from './RouteToPopperForm';

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
          <Box>
            <RouteToPopperForm />
          </Box>
        </Popper>
      </div>
    </ClickAwayListener>
  )
};

export default RouteToPopper;