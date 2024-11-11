import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Menu, MenuItem, IconButton, Typography } from "@mui/material";
import { logOutUser } from "../../auth/auth.hooks";

const ProfileIcon = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const navigate = useNavigate();

  const userInfo = {
    // Mock user data, replace with real data as necessary
    username: "JohnDoe",
    email: "johndoe@example.com",
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowProfileDetails(false); // Reset the toggle on close
  };

  const toggleProfileDetails = () => {
    setShowProfileDetails(!showProfileDetails); // Toggle the display of user details
  };

  const handleLogoutClick = () => {
    logOutUser(); // Calls the imported logout function to remove the token
    navigate("/project2"); // Redirect to the homepage after logging out
    handleClose(); // Ensure the menu is closed after the action
  };

  return (
    <div>
      <IconButton onClick={handleClick} size="large">
        <Avatar alt="Profile" src="/path/to/profile-image.jpg" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={toggleProfileDetails}>My Profile</MenuItem>
        {showProfileDetails && (
          <div style={{ padding: "8px 16px" }}>
            <Typography variant="body2" color="textSecondary">
              <strong>Username:</strong> {userInfo.username}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <strong>Email:</strong> {userInfo.email}
            </Typography>
          </div>
        )}
        <MenuItem onClick={() => navigate("/ratings")}>My Ratings</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileIcon;
