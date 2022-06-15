import React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import SyncIcon from '@mui/icons-material/Sync';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import StatusList from './StatusList';

import './StatusTracker.css';

const Status = ({statuses, setStatuses, user, dueDate, routedTo, comment, status}) => {

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

  return (
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
  )
}

export default Status