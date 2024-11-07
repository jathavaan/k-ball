// ProfileIcon.tsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useAuth } from "./profileIcon.hooks"; // Import the custom hook

const ProfileIcon = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { isLoggedIn, userInfo, loading, fetchUserInfo, login, logout } =
    useAuth(); // Destructure from hook
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    setOpenDialog(true);
    handleClose();
    fetchUserInfo(); // Fetch user info when the dialog opens
  };

  const handleRatingsClick = () => {
    navigate("/ratings");
    handleClose();
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <IconButton onClick={handleClick} size="large">
        <Avatar
          alt="Profile"
          src={isLoggedIn ? "/path/to/profile-image.jpg" : undefined}
        />
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
        {isLoggedIn ? (
          <>
            <MenuItem onClick={handleProfileClick}>My Profile</MenuItem>
            <MenuItem onClick={handleRatingsClick}>My Ratings</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </>
        ) : (
          <MenuItem onClick={login}>Log In</MenuItem>
        )}
      </Menu>

      {/* Dialog for showing user info */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>User Information</DialogTitle>
        <DialogContent>
          {loading ? (
            <CircularProgress />
          ) : userInfo ? (
            <div>
              <Typography variant="body1">
                <strong>First Name:</strong> {userInfo.firstName}
              </Typography>
              <Typography variant="body1">
                <strong>Last Name:</strong> {userInfo.lastName}
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong> {userInfo.email}
              </Typography>
            </div>
          ) : (
            <Typography variant="body2" color="error">
              Failed to load user information.
            </Typography>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfileIcon;
