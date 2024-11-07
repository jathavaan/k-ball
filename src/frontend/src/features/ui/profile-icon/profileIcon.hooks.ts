import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
}

export const useAuth = () => {
  // Set isLoggedIn to true by default to simulate a logged-in state
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true for now
  const [userInfo, setUserInfo] = useState<UserInfo | null>({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
  }); // Set a default user info for testing purposes
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Mock function to fetch user data (no actual fetch for now)
  const fetchUserInfo = async () => {
    setLoading(true);
    // Simulate a loading delay
    setTimeout(() => {
      // For now, assume that fetching was successful and no error handling
      setUserInfo({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
      });
      setIsLoggedIn(true); // Set as logged in
      setLoading(false);
    }, 1000); // Simulate a 1 second delay
  };

  // Mock login function
  const login = () => {
    setIsLoggedIn(true);
    navigate("/login"); // Adjust path if needed
  };

  // Mock logout function
  const logout = () => {
    setIsLoggedIn(false);
    setUserInfo(null);
    window.location.href = "http://localhost:5173/project2"; // Redirect to specified URL on logout
  };

  return {
    isLoggedIn,
    userInfo,
    loading,
    fetchUserInfo,
    login,
    logout,
  };
};
