import React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import SyncIcon from '@mui/icons-material/Sync';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import classNames from 'classnames';

import './StatusTracker.css';

const Status = ({ statuses, setStatuses, user, dueDate, routedTo, comment, status, handleClick }) => {

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

  const statusButtonStyles = classNames('review-status-grid-item review-status-buttons', {
    doingbutton2: status === "Doing",
    approvebutton2: status === "Approve",
    rejectbutton2: status === "Reject",
    inquirebutton2: status === "Inquire"
  });

  const statusButton = () => {
    if (status === "Inquire") {
      return (
        <div><QuestionMarkIcon /></div>
      )
    } if (status === "Doing") {
      return (
        <div><SyncIcon sx={{fontSize: "12px"}} /></div>
      )
    } if (status === "Reject") {
      return (
        <div><ThumbDownOffAltIcon /></div>
      )
    } if (status === "Approve") {
      return (
        <div><ThumbUpOffAltIcon /></div>
      )
    }
  }

  return (        
    <div className="review-status-grid-item">    
    {/* <button 
      className="doing-button-2 review-status-grid-item review-status-buttons" 
      onClick={handleClick}
    >
      <div><SyncIcon sx={{fontSize: "12px"}} /></div>
      <div>Doing</div>
    </button>  
  
    <div>@Helder Melendez</div>   
    <div className="twelvepx">{dueDate}</div> */}

    <BootstrapTooltip title={comment} placement="top-start">
      <button 
        className={statusButtonStyles}
        type='submit'>
          {statusButton()}
          <div>
            {status}
          </div>
      </button>
    </BootstrapTooltip>
    <div>{user}</div>
    <div className="twelvepx">{dueDate}</div>
   </div>
  )
}

export default Status