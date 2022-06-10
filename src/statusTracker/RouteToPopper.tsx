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
            <div className="Route-To-Popper">
              <form className="Route-To-Popper-Form">
                <div className="Route-To-Popper-Grid">
                  <div className="route-grid-item">Due Date:</div>
                  <div className="route-to-item-container">
                    <Calendar />
                  </div>
                  <div className="route-grid-item">
                    <label htmlFor="route-to">Route To:</label>
                  </div>
                  <div className="route-grid-item route-to-item-container">
                    <div className="custom-select">
                      <select className="route-select-dropdown" Route-to-item-container id="route-to" name="route">
                        <option value="Finalized">Finalized <PersonOutlineIcon sx={{fontSize: "12px"}}/></option>
                        <option value="IT Group">IT Group</option>
                        <option value="Helder Mendez">Helder Mendez</option>
                        <option value="Michael Polan">Michael Polan</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Box>
        </Popper>
      </div>
    </ClickAwayListener>
  )
};

export default RouteToPopper;