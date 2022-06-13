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

import './StatusTracker.css';

const StatusPopper = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const id = open ? 'simple-popper' : undefined;

  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      fontSize: 14,
    },
  }));

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
            <div className="status-popper">
              <div className="status-popper-container">
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
                <div className="review-status-grid">
                
                  <button 
                    className="doing-button-2 review-status-grid-item review-status-buttons" 
                    onClick={handleClick}
                  >
                    <div><SyncIcon sx={{fontSize: "12px"}} /></div>
                    <div>Doing</div>
                  </button>  
                
                  <div>@Helder Melendez</div>   
                  <div className="twelvepx">04/11/2022 - 5:00 PM</div>
                  <BootstrapTooltip title="How did you do such a great job on this?" placement="top-start">
                    <button 
                      className="review-status-grid-item inquire-button-2 review-status-buttons" 
                      type='submit'>
                        <div>
                          <QuestionMarkIcon />
                        </div>
                        <div>
                          Inquire
                        </div>
                    </button>
                  </BootstrapTooltip>
                  <div>@Jaya Chigurupati</div>
                  <div className="twelvepx">04/10/2022 - 02:24 PM</div>
                  <BootstrapTooltip title="I feel threatened by your competence" placement="top-start">
                    <button 
                      className="review-status-grid-item reject-button-2 review-status-buttons" 
                      type='submit'>
                        <div>
                            <ThumbDownOffAltIcon />
                        </div>
                        <div>
                            Reject
                        </div>
                    </button>
                  </BootstrapTooltip>
                  <div>@Nasar Abbas</div>
                  <div className="twelvepx">04/03/2022 - 2:11 PM</div>
                  <BootstrapTooltip title="Great job! Exceeded expectations!" placement="top-start">
                    <button 
                      className="review-status-grid-item approve-button-2 review-status-buttons" 
                      type='submit'
                    >
                      <div><ThumbUpOffAltIcon /></div>
                      <div>Approve</div>
                    </button>
                  </BootstrapTooltip>
                  <div>@Mike Poland</div>
                  <div className="twelvepx">04/01/2022 - 5:00 PM</div>
                </div>
              </div>
            </div>
          </Box>
        </Popper>
      </div>

      </ClickAwayListener>
  )
}

export default StatusPopper;