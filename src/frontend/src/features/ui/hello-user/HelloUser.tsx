import { useLoggedInUserInfo } from "../../auth/auth.hooks";
import { StyledHelloUser } from "./helloUser.style";
import { Text } from "../text/Text"; // Ensure the import path matches where your Text component is located

const HelloUser = () => {
  const { data: userInfo, isLoading, error } = useLoggedInUserInfo();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!userInfo) return <div>No user info available</div>;

  return (
    <>
      <StyledHelloUser>Welcome, {userInfo.firstName}!</StyledHelloUser>
      <Text text="This is your ratings:" sx={{ mt: 12, fontSize: "2.4rem" }} />
    </>
  );
};

export default HelloUser;
