import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../../auth/auth.api"; // Updated import path

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserInfo();
    }
  }, []);

  const fetchUserInfo = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");
      const response = await authenticateUser(token);
      if (response) {
        setUserInfo({
          firstName: response.firstName,
          lastName: response.lastName,
          email: response.email,
        });
        setIsLoggedIn(true);
      } else {
        throw new Error("Failed to fetch user info");
      }
    } catch (error) {
      console.error("Failed to fetch user info", error);
      setIsLoggedIn(false);
      setUserInfo(null);
    }
    setLoading(false);
  };

  return {
    isLoggedIn,
    userInfo,
    loading,
    fetchUserInfo,
  };
};
