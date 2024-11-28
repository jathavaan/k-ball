import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store.ts";
import {
  selectIsProfileInfoExpanded,
  selectIsProfileMenuOpen,
  selectIsRatingsExpanded,
  setIsProfileInfoExpanded,
  setIsProfileMenuOpen,
  setIsRatingsExpanded,
} from "@features/profile-menu/profileMenu.slice.ts";
import { getLoggedInUser, logOutUser, useUserInfo } from "@features/auth";
import { useNavigate } from "react-router-dom";
import { useDetailedPlayerRatings } from "@features/profile-menu/profileMenu.query.ts";
import { useEffect } from "react";

export const useProfileMenu = () => {
  const userId = getLoggedInUser();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const isProfileInfoExpanded = useSelector(selectIsProfileInfoExpanded);
  const isRatingsExpanded = useSelector(selectIsRatingsExpanded);

  const {
    mutate: mutateUserInfo,
    data: userInfo,
    isPending: isUserInfoPending,
    isError: isUserInfoError,
  } = useUserInfo(userId ?? 0);

  const {
    mutate: mutatePlayerRatings,
    data: playerRatings,
    isPending: isPlayerRatingsPending,
    isError: isPlayerRatingsError,
  } = useDetailedPlayerRatings(getLoggedInUser() ?? 0);

  const toggleIsProfileInfoExpanded = () => {
    dispatch(setIsProfileInfoExpanded(!isProfileInfoExpanded));
  };

  const toggleIsRatingsExpanded = () => {
    dispatch(setIsRatingsExpanded(!isRatingsExpanded));
  };

  const logOut = () => {
    navigate("/project2/");
    logOutUser();
    dispatch(setIsProfileMenuOpen(false));
  };

  const onPlayerRatingClick = (playerId: number) => {
    navigate(`/project2/players/${playerId}`);
    dispatch(setIsProfileMenuOpen(false));
    dispatch(setIsRatingsExpanded(false));
  };

  useEffect(() => {
    if (userId) mutateUserInfo();
  }, [mutateUserInfo, userId]);

  useEffect(() => {
    if (isRatingsExpanded) {
      mutatePlayerRatings();
    }
  }, [isRatingsExpanded, mutatePlayerRatings]);

  return {
    userInfo,
    isUserInfoPending,
    isUserInfoError,
    playerRatings,
    isPlayerRatingsPending,
    isPlayerRatingsError,
    isProfileInfoExpanded,
    isRatingsExpanded,
    toggleIsProfileInfoExpanded,
    toggleIsRatingsExpanded,
    onPlayerRatingClick,
    logOut,
  };
};

export const useProfileMenuToggle = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isProfileMenuOpen = useSelector(selectIsProfileMenuOpen);
  const openDrawer = () => {
    dispatch(setIsProfileMenuOpen(!isProfileMenuOpen));
  };
  const closeDrawer = () => {
    if (!isProfileMenuOpen) return;
    dispatch(setIsProfileMenuOpen(false));
    dispatch(setIsRatingsExpanded(false));
  };
  return { isProfileMenuOpen, openDrawer, closeDrawer };
};
