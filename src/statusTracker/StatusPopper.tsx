import React, { useState } from 'react';
import {
  Button,
  Box,
  Popper,
  ClickAwayListener,
} from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import SyncIcon from '@mui/icons-material/Sync';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import StatusList from './StatusList';
import classNames from 'classnames';

import './StatusTracker.css';

const StatusPopper = ({ statuses, setStatuses, user, setUser, routeTo, setRouteTo }) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const id = open ? 'simple-popper' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  // conditionally updates the size of the status popper
  const statusPopperSizing = classNames('status-popper', {
    oneItem: statuses.length === 4,
    twoItem: statuses.length === 5,
    threeItem: statuses.length === 6,
  });

  const statusPopperContainerSizing = classNames('status-popper-container', {
    oneItemContainer: statuses.length === 4,
    twoItemContainer: statuses.length === 5,
    threeItemContainer: statuses.length === 6,
  });

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
            <div className={statusPopperSizing}>
              <div className={statusPopperContainerSizing}>
                <div className="current-status-container">
                  <div>Current Status: </div>           
                  <button 
                    className="doing-button" 
                    onClick={handleClick}>
                      <div><SyncIcon sx={{fontSize: "12px"}} /></div>
                      <div>Doing</div>
                  </button>             
                </div> 
                <div>Review Status: </div>
                {/* <div className="review-status-grid"> */}
                <StatusList 
                  routeTo={routeTo}
                  setRouteTo={setRouteTo}
                  user={user}
                  setUser={setUser}
                  statuses={statuses}
                  setStatuses={setStatuses}
                  handleClick={handleClick}
                />
                {/* </div> */}
              </div>
            </div>
          </Box>
        </Popper>
      </div>

      </ClickAwayListener>
  )
}

export default StatusPopper;