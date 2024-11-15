import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import { logOutUser } from "../../auth/auth.hooks";
import { useLoggedInUserInfo } from "../../auth/auth.hooks";

const ProfileIcon = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false); // State to control the user info display
  const navigate = useNavigate();
  const { data: userInfo, isLoading, error } = useLoggedInUserInfo();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setShowMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowMenu(false);
    setShowUserInfo(false);
  };

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

  const handleLogoutClick = () => {
    logOutUser();
    navigate("/project2");
    handleClose();
  };

  return (
    <div>
      <IconButton onClick={handleClick} size="large">
        <Avatar /> {/* Consider adding user-specific Avatar if applicable */}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={toggleUserInfo}>My Info</MenuItem>
        {showUserInfo && (
          <div style={{ padding: "8px 16px" }}>
            {isLoading ? (
              <CircularProgress />
            ) : error ? (
              <Typography color="error">Failed to load user info</Typography>
            ) : userInfo ? (
              <>
                <Typography variant="body2" color="textSecondary">
                  <strong>First Name:</strong> {userInfo.firstName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Last Name:</strong> {userInfo.lastName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Email:</strong> {userInfo.email}
                </Typography>
              </>
            ) : (
              <Typography>No user info available</Typography>
            )}
          </div>
        )}
        <MenuItem onClick={() => navigate("/project2/ratings")}>
          My Ratings
        </MenuItem>
        <MenuItem onClick={handleLogoutClick}>Log Out</MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileIcon;
