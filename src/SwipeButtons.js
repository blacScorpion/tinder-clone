import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton";
function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipedButtons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipedButtons__close">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipedButtons__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipedButtons__favourite">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipedButtons__flash">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
