import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./User.styled";
import UserDetails from "./UserDetails";

const UserCard = () => {
  // console.log(userDetail);
  const userDetail = useSelector((state) => state.userDetail);
  return (
    <Card>
      {userDetail ? (
        <UserDetails />
      ) : (
        <p>Click on any Button to get user Details</p>
      )}
    </Card>
  );
};

export default UserCard;
