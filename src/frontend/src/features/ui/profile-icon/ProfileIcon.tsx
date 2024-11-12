import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Menu, MenuItem, IconButton, Typography } from "@mui/material";
import { logOutUser } from "../../auth/auth.hooks";
import { useLoggedInUserInfo } from "../../auth/auth.hooks"; // Import the hook

const ProfileIcon = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const navigate = useNavigate();
  const { data: userInfo, isLoading, error } = useLoggedInUserInfo(); // Use the hook to get user info

  if (error) {
    console.error("Error fetching user info:", error);
    // Optionally render error state here or handle it differently
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowProfileDetails(false);
  };

  const toggleProfileDetails = () => {
    setShowProfileDetails(!showProfileDetails);
  };

  const handleLogoutClick = () => {
    logOutUser();
    navigate("/project2"); // Update as per your routing
    handleClose();
  };

  return (
    <div>
      <IconButton onClick={handleClick} size="large">
        <Avatar /> {/* Consider updating based on user data */}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={toggleProfileDetails}>My Profile</MenuItem>
        {showProfileDetails && userInfo && !isLoading && (
          <div style={{ padding: "8px 16px" }}>
            <Typography variant="body2" color="textSecondary">
              <strong>Username:</strong> {userInfo?.firstName}{" "}
              {/* Check if the real user data has a 'username' field */}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <strong>Email:</strong> {userInfo?.email}
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
