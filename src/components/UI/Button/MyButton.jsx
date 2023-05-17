import React, { useState } from 'react';
import classes from './MyButton.module.css';

const MyButton = ({ children, ...props }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };


  return (
  
  <button
      {...props}
      className={`${classes.myBtn} ${isFollowing ? classes.following : ''}`}
      onClick={handleClick}
    >
      {isFollowing ? 'Following' : children}
    </button>
)};

export default MyButton;
