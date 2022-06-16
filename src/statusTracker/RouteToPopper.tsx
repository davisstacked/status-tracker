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

const RouteToPopper = ({ user, setUser, statuses, setStatuses, dueDate, routeTo, setRouteTo }) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  
  const handleClickAway = () => {
    setAnchorEl(null);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <button className="route-to-button status-button-container" onClick={handleClick}>
              <div><SendOutlinedIcon sx={{fontSize: "12px"}} /></div>
              <div>Route To</div>
        </button>
        <Popper placement="bottom-start" id={id} open={open} anchorEl={anchorEl}>
          <Box>
            <RouteToPopperForm
              routeTo={routeTo}
              setRouteTo={setRouteTo}
              dueDate={dueDate}
              user={user}
              setUser={setUser}
              handleClickAway={handleClickAway}
              statuses={statuses}
              setStatuses={setStatuses}
            />
          </Box>
        </Popper>
      </div>
    </ClickAwayListener>
  )
};

export default RouteToPopper;